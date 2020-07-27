require("dotenv").config();
require("./../config/dbConnection.js");

const userModel = require("./../models/User.js");

const users = [
  {
    firstName: "John",
    lastName: "Yoyo",
    email: "jo@yopmail.com",
    password: "DFG567UJ678I@@àà",
    city: "Paris",
  },
  {
    firstName: "Paul",
    lastName: "Yaya",
    email: "po@yopmail.com",
    password: "@@D56ààFGJ6787UI",
    city: "Paris",
  },
  {
    firstName: "John",
    lastName: "Doe",
    email: "coco@yopmail.com",
    password: "UJà8Ià7D67@@FG56",
    city: "Paris",
  },
];

userModel
  .insertMany(users)
  .then((dbRes) => console.log(dbRes))
  .catch((dbErr) => console.log(dbErr));
