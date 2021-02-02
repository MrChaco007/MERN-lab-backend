const express = require("express");
const router = express.Router();
// const Artist = require("../models/Artist");
// const Album = require("../models/album");

router.get("/", async (req, res) => {
//   const data = await Artist.find({}).populate("album");
  res.json({ status: 200, data: "msg" });
});

// router.get("/:name", async (req, res) => {
//   Author.findOne({ firstName: req.params.name })
//     .then((author) => res.json({ status: 200, artist: artist }))
//     .catch((err) => res.json({ status: 400, err: err }));
// });

// router.post("/", async (req, res) => {
//   const artist = req.body;
//   Artist.create(artist).then((artist) =>
//     res.json({ status: 200, data: artist })
//   );
// });

// router.put("/updateArtist/:id", async (req, res) => {
//   const artist = await Artist.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   });
//   res.json({ status: 200, data: artist });
// });

// router.put("/:artistId/addAlbums/:albumId", async (req, res) => {
//   const album = await Album.findById(req.params.albumId);
//   const artist = await Artist.findByIdAndUpdate(req.params.artistId, {
//     $push: { albums: album.id },
//     new: true,
//   });
//   res.json({ status: 200, data: artist });
// });

// router.delete("/:id", async (req, res) => {
//   res.json(await Artist.findByIdAndRemove(req.params.id));
// });

module.exports = router;
