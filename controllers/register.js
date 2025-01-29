import pool from "../model/db.js";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import pkg from "joi";

import { registrationValidation } from "../validation/registrationValidation.js";
const { ValidationError } = pkg;
// Configure the transporter
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "subhash.kesarwani383@gmail.com",
    pass: 8574147060,
  },
});
// Function to send mail
const sendMail = (to, subject, text, html) => {
  const mailOptions = {
    from: "subhash.kesarwani383@gmail.com",
    to: to,
    subject: subject,
    text: text,
    html: html,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
  });
};

export const addUser = async (request, response) => {
  const { name, email, password, mobile, address } = request.body;
  // if (!name || !email || !password || !mobile || !address) {
  //   return response.status(400).json({ message: "All fields are required" });
  // }
  try {
    await registrationValidation.validateAsync(request.body);
    // Check if user already exists
    const findEmail = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (findEmail.rows.length > 0) {
      response.status(400).json({ message: "User already exists" });
    }

    //Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // const text =
    //   "INSERT INTO users (name, email, password, mobile, address, create_date) VALUES($1, $2, $3, $4, $5, $6) RETURNING *";
    // const values = [name, email, hashedPassword, mobile, address, new Date()];
    const newUser = await pool.query(
      "INSERT INTO users (name, email, password, mobile, address, create_date) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, email, hashedPassword, mobile, address, new Date()]
    );

    response.status(200).json({ message: "User registered successfully" });
    // Send a welcome email
    const subject = "Welcome to Our Service!";
    const text = `Hi ${name}, welcome to our service!`;
    const html = `<h1>Hi ${name},</h1><p>Welcome to our service!</p>`;

    sendMail(email, subject, text, html);
  } catch (error) {
    if (error instanceof ValidationError) {
      response.status(400).json({ message: error.message });
    }
    response.status(500).json({ message: "Server error" });
  }
};
