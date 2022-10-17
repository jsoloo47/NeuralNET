import express from "express";
import User from "../models/User.js";
const router = express.Router();

export const getIndex = (req, res) => {
  res.send("Hello World");
};

export const postUser = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    console.log(user);
    res.json({ status: "User created" });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: "Duplicate Email" });
  }
};

export const postLogin = async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (user) {
    return res.json({ status: "ok", user: true });
  } else {
    return res.json({ status: "failed", user: false });
  }
};

export default router;
