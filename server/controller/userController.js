import User from "../models/usersModels.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.verifyPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(201);
    throw new Error("User already exists");
  }

  const newUser = new User({
    name,
    email,
    password,
  });

  const registeredUser = await newUser.save();

  res.status(201).json({
    _id: registeredUser._id,
    name: registeredUser.name,
    email: registeredUser.email,
    token: generateToken(registeredUser._id),
  });
});

export const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    const deletedUser = await user.delete();
    res.status(200).json(deleteUser);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
