const express = require("express");
const router = express.Router();
const itemModel = require("./../models/Item.js");

/* ROUTES ARE PRE-FIXED WITH /API/ITEMS */

router.get("/", (req, res, next) => {
  itemModel
    .find()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  itemModel
    .findById(req.params.id)
    .populate("id_user")
    .then((oneItem) => res.status(200).json(oneItem))
    .catch(next);
});

router.post("/", (req, res, next) => {
  itemModel
    .create(req.body)
    .then((newItem) => {
      res.status(201).json(newItem);
    })
    .catch(next);
});

router.patch("/:id", (req, res, next) => {
  itemModel
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updateItem) => {
      res.status(200).json(updateItem);
    })
    .catch(next);
});

router.delete("/:id", (req, res, next) => {
  itemModel
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.sendStatus(204);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

module.exports = router;
