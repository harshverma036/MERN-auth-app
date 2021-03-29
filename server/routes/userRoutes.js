import express from "express";
import {
  loginUser,
  registerUser,
  deleteUser,
} from "../controller/userController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/delete").delete(protect, deleteUser);
router.route("/login").post(loginUser);
router.route("/register").post(registerUser);

export default router;
