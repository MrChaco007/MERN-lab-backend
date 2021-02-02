const mongoose = require("../db/connection");

const Schema = mongoose.Schema;
const artistSchema = new Schema({
  name: String,
  genre: String,
  albums: [{ ref: "Album", type: Schema.Types.ObjectId }],
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;
