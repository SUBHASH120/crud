import Jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const authToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log({ authHeader });
  if (!authHeader) {
    res.status(401).json({ message: "Access denied. Token required abhi" });
  }
  const token = authHeader && authHeader.split(" ")[1];
  try {
    const decoded = Jwt.verify(token, process.env.SECRET_KEY);
    console.log("Token is valid", decoded);
    next();
  } catch (error) {
    if (error instanceof Jwt.JsonWebTokenError) {
      console.error("Invalid token signature:", error.message);
      res.status(403).json({ message: error.message });
    } else if (error instanceof Jwt.TokenExpiredError) {
      console.error("Token has expired:", error.message);
      res.status(403).json({ message: error.message });
    } else {
      res.status(403).json({ message: error.message });
      console.error("Token verification error:", error.message);
    }
  }
};
