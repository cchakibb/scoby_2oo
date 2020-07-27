const express = require("express");
const router = express.Router();
const userModel = require("./../models/User");

router.patch("/me", (req, res, next) => {
  itemModel
    .findByIdAndUpdate(req.session.currentUser._id, req.body, { new: true })
    .then((updateUser) => {
      res.status(200).json(updateUser);
    })
    .catch(next);
});

module.exports = router;
