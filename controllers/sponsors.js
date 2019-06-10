const express = require("express");
const router = express.Router();

const Sponsor = require("../models/Sponsor");

//find all sponsors

router.get("/", (req, res) => {
  Sponsor.find({}).then(allSponsors => res.json(allSponsors));
});

//find sponsor after looking up by id

router.get("/:id", (req, res) => {
  Sponsor.find({ _id: req.params.id }).then(sponsors => res.json(sponsors));
});

//create new sponsor

router.post("/", (req, res) => {
  const newSponsor = req.body;
  Sponsor.create(req.body).then(sponsor => res.json(sponsor));
});

//update sponsor after looking up by name

router.put("/:name", (req, res) => {
  Sponsor.findOneAndUpdate({ name: req.params.name }, req.body, {
    new: true
  }).then(sponsor => res.json(sponsor));
});

//delete a sponsor after looking up by name

router.delete("/:name", (req, res) => {
  Sponsor.findOneAndDelete({ name: req.params.name }).then(sponsor => {
    res.json(sponsor);
  });
});

module.exports = router;
