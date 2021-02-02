const mongoose = require("../db/connection");

const Schema = mongoose.Schema;
const albumSchema = new Schema({
  title: String,
  yearReleased: Number,
  img: String
});

const Album = mongoose.model("Album", albumSchema);

module.exports = Album;
