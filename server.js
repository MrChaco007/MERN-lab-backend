///////////////////////////
// Environmental Variables
///////////////////////////
require("dotenv").config();
const { PORT, NODE_ENV = "development" } = process.env;
const mongoose = require("./db/connection")

//CORS
const cors = require("cors");

//Bringing in Express
const express = require("express");
const app = express();

//OTHER IMPORTS
const morgan = require("morgan");
const artistRouter = require("./controllers/artist");
// const albumRouter = require("./controllers/album")

////////////
//MIDDLEWARE
////////////

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("tiny")); //logging

///////////////
//Routes and Routers
//////////////
app.get("/", (req, res) => {
    res.json({msg:"hello world"})
})
// Artist Routes send to artist router
app.use("/artist/", artistRouter);
// app.use("/album/", albumRouter)

//LISTENER
app.listen(PORT, () => {
  console.log(`Your are listening on port ${PORT}`);
});
