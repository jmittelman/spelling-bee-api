const mongoose = require("../connection");

const Schema = mongoose.Schema;

const Bee = new Schema({
  year: Number,
  champion: [
    {
      type: Schema.Types.ObjectId,
      ref: "Champion"
    }
  ]
});

module.exports = mongoose.model("Bee", Bee);
