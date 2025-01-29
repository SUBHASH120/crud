import pool from "../model/db.js";
import jwt from "jsonwebtoken"; // For generating JWT tokens
import bcrypt from "bcryptjs";
const jwtSecret = "jabwemet";
import dotenv from "dotenv";
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

export const login = async (request, response) => {
  const { email, password } = request.body;
  // request.session.isLoggedIn = true;
  const user = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
  if (!user) {
    return response
      .status(401)
      .json({ message: "Invalid username or password" });
  }
  const match = await bcrypt.compare(password, user?.rows[0]?.password);
  if (!match) {
    return response
      .status(401)
      .json({ message: "Invalid username or password" });
  }
  try {
    // Generate JWT token
    const token = jwt.sign(
      { id: user.rows[0].user_id, email: user.rows[0].email },
      SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    // Send the token as response

    response.status(200).json({ token });
    // request.session.isLoggedIn = true;
  } catch (error) {
    response.status(500).json({ message: "Server error" });
  }
};
