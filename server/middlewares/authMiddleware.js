import mongoose from "mongoose";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/usersModels.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decodeToken = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decodeToken.id);

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Tokent failed, not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("No Token, not authorized");
  }
});

export default protect;
