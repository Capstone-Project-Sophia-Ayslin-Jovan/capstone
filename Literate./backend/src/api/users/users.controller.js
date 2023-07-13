const express = require("express");
const router = express.Router();
const userService = require("./users.service");

router.post("/login", async function (req, res, next) {
  try {
    const user = await userService.loginUser(req.body);
    return res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

router.post("/register", async function (req, res, next) {
  try {
    const user = await userService.registerUser(req.body);
    return res.status(201).json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
