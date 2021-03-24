import express from "express";
import { loginUser, registerUser } from "../controller/userController.js";

const router = express.Router();

router.route("/login").post(loginUser);
router.route("/register").post(registerUser);

export default router;
