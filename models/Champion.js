const mongoose = require("../connection");

const Schema = mongoose.Schema;

const Champion = new Schema({
  name: String,
  sponsor: {
    type: Schema.Types.ObjectId,
    ref: "Sponsor"
  },
  winningWord: {
    word: String,
    definition: String
  }
});

module.exports = mongoose.model("Champion", Champion);
