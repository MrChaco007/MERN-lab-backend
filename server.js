///////////////////////////
// Environmental Variables
///////////////////////////
require("dotenv").config();
const { PORT, NODE_ENV = "development" } = process.env;

//MONGO CONNECTION
const mongoose = require("./db/connection");

//CORS
const cors = require("cors");

//Bringing in Express
const express = require("express");
const app = express();

//OTHER IMPORTS
const morgan = require("morgan");
// const artistRouter = require("./controllers/artist");

////////////
//MIDDLEWARE
////////////
NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());
app.use(express.json());
app.use(morgan("tiny")); //logging

///////////////
//Routes and Routers
//////////////

//Route for testing server is working
app.get("/", (req, res) => {
  res.json({ hello: "Hello World!" });
});

// Artist Routes send to artist router
// app.use("/artist", artistRouter);

//LISTENER
app.listen(PORT, () => {
  console.log(`Your are listening on port ${PORT}`);
});
