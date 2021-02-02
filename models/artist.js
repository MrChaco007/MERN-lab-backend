const {Schema, model} = require("mongoose")

const artistSchema = new Schema(
{
 name: String, 
 genre: String, 
 albums: [{ref: "Artist", type: mongoose.Schema.Types.ObjectId}]
}
)

const Artist = mongoose.model("Artist", artistSchema)

module.exports = Artist