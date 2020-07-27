const express = require("express");
const router = express.Router();
const userModel = require("./../models/User");

router.patch("/me", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
