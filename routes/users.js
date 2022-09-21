const express = require("express");

const router = express.Router();
const User = require("../models/User");

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  try {
    const foundUser = await User.findOne({ username, password });
    console.log(foundUser);
    res.json({ isAthenticated: foundUser ? true : false });
  } catch (err) {
    console.log(err);
    res.json({ isAthenticated: false });
  }
});

module.exports = router;
