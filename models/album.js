const mongoose = require("../db/connection")

const albumSchema = new mongoose.Schema({
    title: String, 
    yearReleased: Number
})

const Album = mongoose.model("Album", albumSchema)

module.exports = Album