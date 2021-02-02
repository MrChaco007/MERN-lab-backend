const {Schema, model} = require("mongoose")

const artistSchema = new Schema({
  name: String,
  genre: String,
  albums: [{ ref: "Album", type: mongoose.Schema.Types.ObjectId }],
});

const Artist = model("Artist", artistSchema);

module.exports = Artist;
