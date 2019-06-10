const express = require("express");
const router = express.Router();

const Champion = require("../models/Champion");

//find all champions

router.get("/", (req, res) => {
  Champion.find({}).then(allChampions => res.json(allChampions));
});

//find a champion by name

router.get("/:name", (req, res) => {
  Champion.find({ name: req.params.name }).then(champions =>
    res.json(champions)
  );
});

//create a new champion

router.post("/", (req, res) => {
  const newChampion = req.body;
  Champion.create(req.body).then(champion => res.json(champion));
});

//update champion after looking up by name

router.put("/:name", (req, res) => {
  Champion.findOneAndUpdate({ name: req.params.name }, req.body).then(
    updatedChampion => {
      res.json(updatedChampion);
    }
  );
});

//delete champion after looking up by name

router.delete("/:name", (req, res) => {
  Champion.findOneAndDelete({ name: req.params.name }).then(champion => {
    res.json(champion);
  });
});

module.exports = router;
