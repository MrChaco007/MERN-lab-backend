const express = require("express");
const router = express.Router();
const Album = require("../models/album");
// Require the Album controller.

// Write the route to list all albums
const index = () => {
  router.get("/", (req, res) => {
    Album.find({})
      .then((allAlbums) => {
        res.json({
          status: 200,
          albums: allAlbums,
        });
      })
      .catch((err) => res.json({ status: 400, err: err }));
  });
};
index();
// Write the route to get album by title
const show = () => {
  router.get("/:title", (req, res) => {
    Album.findOne({ title: req.params.title })
      .then((album) =>
        res.json({
          status: 200,
          album: album,
        })
      )
      .catch((err) => res.json({ status: 400, err: err }));
  });
};

show();


// Write the route to create an album
const create = () => {
  router.post("/", (req, res) => {
    const album = req.body;
    Album.create(album)
      .then((album) => res.json({ status: 200, data: album }))
      .catch((err) => res.json({ status: 400, err: err }));
  });
};

create();
// Write the route to update an album
const update = () => {
  router.put("/:id", (req, res) => {
    Album.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((album) => res.json({ status: 200, data: album }))
      .catch((err) => res.json({ status: 400, err: err }));
  });
};
update();

// Write the route to delete the album by title
const _delete = () => {
  router.delete("/:title", (req, res) => {
    Album.findOneAndDelete({ title: req.params.title })
      .then((album) => res.json({ status: 200, msg: "item deleted" }))
      .catch((err) => res.json({ status: 400, err: err }));
  });
};

_delete();

module.exports = router;
