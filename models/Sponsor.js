const mongoose = require("../db/connection");

const Schema = mongoose.Schema;

const Sponsor = new Schema({
  name: String,
  city: String,
  state: String
});

module.exports = mongoose.model("Sponsor", Sponsor);
