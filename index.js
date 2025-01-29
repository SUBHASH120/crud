import express from "express";
import cron from "node-cron";
import twilio from "twilio";
import fs from "fs";
import dotenv from "dotenv";
import helmet from "helmet";
import customers from "./routes/customers.js";
import categories from "./routes/categories.js";
import products from "./routes/products.js";
import orders from "./routes/orders.js";
import order_details from "./routes/order_details.js";
import testproducts from "./routes/testproducts.js";
import joins from "./routes/joins.js";
import images from "./routes/images.js";
import register from "./routes/register.js";
import login from "./routes/login.js";
import { authenticateToken } from "./common/authenticateToken.js";
import { authToken } from "./common/authToken.js";
// Load environment variables from .env file
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use("/", register);
app.use("/", login);
app.use("/", authenticateToken, customers);
app.use("/", authenticateToken, categories);
app.use("/", authenticateToken, products);
app.use("/", authenticateToken, orders);
app.use("/", authenticateToken, order_details);
app.use("/", authenticateToken, testproducts);
app.use("/", authenticateToken, joins);
app.use("/", authenticateToken, images);

// Schedule a task to run every minute
// cron.schedule("* * * * *", () => {
//   console.log("Running a task every minute");
// });

// Your Twilio credentials
// const accountSid = process.env.TWILIO_ACCOUNT_SID; // Replace with your Account SID from Twilio
// const authToken = process.env.TWILIO_AUTH_TOKEN; // Replace with your Auth Token from Twilio
// const client = twilio(accountSid, authToken);
// Send an SMS
// client.messages
//   .create({
//     body: "Hello, this is a test message from Node.js!",
//     from: "+1234567890", // Replace with your Twilio phone number
//     to: "+918141278784", // Replace with the recipient's phone number
//   })
//   .then((message) => console.log("Message sent with SID:", message.sid))
//   .catch((error) => console.error("Error sending message:", error));

//file system

// fs.writeFile("fsFile.html", "Hello world", "utf8", (err, data) => {
//   if (err) throw err;

// });
// fs.appendFile("fsFile.html", "I am going to update the file", "utf8", (err) => {
//   if (err) throw err;
// });
// fs.rename("fsFile.html", "fsFile1.html", (err) => {
//   if (err) throw err;
// });
// fs.unlink("fsFile1.html", (err) => {
//   if (err) throw err;
// });
// fs.readFile("fsFile1.html", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
