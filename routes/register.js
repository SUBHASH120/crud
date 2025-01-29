import express from "express";
const router = express.Router();

import {addUser} from "../controllers/register.js";
router.post("/register", addUser);
export default router;
