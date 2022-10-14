const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const router = express.Router();
const User = require("../models/User");

function generateAccessToken(username) {
  return jwt.sign({ username }, process.env.JWT_PRIVATE_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
}

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  try {
    let jwtToken = null;
    const foundUser = await User.findOne({ username, password });

    if (foundUser) {
      jwtToken = generateAccessToken(username);
      res
        .status(200)
        .send({ isAuthenticated: foundUser ? true : false, token: jwtToken });
    } else {
      res.status(401).send({ isAuthenticated: false });
    }
  } catch (err) {
    console.log(err);
    res.status(401).send({ isAuthenticated: false });
  }
});

module.exports = router;
