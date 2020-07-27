require("dotenv").config();
require("./../config/dbConnection.js");

const itemModel = require("./../models/Item.js");

const items = [
  {
    name: "whatever1",
    description: "The worst thing",
    category: ["Plant"],
    quantity: 12,
    address: "12 rue des Poiriers, 750001 Paris",
    location: { type: "Point", coordinates: [2.3458989196781204, 48.86487018786781] },

    id_user: "5f1ee2f8f7e4143c5962c1e9",
  },
  {
    name: "whatever2",
    description: "The best thing",
    category: ["Kefir"],
    quantity: 9,
    address: "22 rue des Cerisiers, 750003 Paris",
    location: { type: "Point", coordinates: [2.3243833195189154, 48.855567654136365] },

    id_user: "5f1ee2f8f7e4143c5962c1ea",
  },
];

itemModel
  .insertMany(items)
  .then((dbRes) => console.log(dbRes))
  .catch((dbErr) => console.log(dbErr));
