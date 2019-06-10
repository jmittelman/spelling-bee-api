const express = require("express");
const router = express.Router();

const Bee = require("../models/Bee");

// List all bees
router.get("/", (req, res) => {
  Bee.find({}).then(bees => {
    res.json(bees);
  });
});

// List a bee by year
router.get("/:year", (req, res) => {
  Bee.findOne({ year: req.params.year }).then(bee => {
    res.json(bee);
  });
});

// create a new bee

router.post("/", (req, res) => {
  Bee.create(req.body).then(newBee => res.json(newBee));
});

// router.post("/new", (req, res) => {
//   Bee.create(req.body.user).then(newBee => {
//     Champion.create(req.body.champion).then(newChampionv => {
//       Sponsor.create(req.body.sponsor).then(newSponsor => {
//         newBee.champion.push(newChampion._id);
//         newChampion.sponsor === newSponsor._id;

//         newBee.save();
//         newChampion.save();
//         newSponsor.save();
//         res.json(newBee);
//       });
//     });
//   });
// });

//update by year

router.put("/:id", (req, res) => {
  Bee.findOneAndUpdate({ _id: req.params.id }, req.body).then(newRecord => {
    res.json(newRecord);
  });
});

//delete

router.delete("/:id", (req, res) => {
  Bee.findOneAndDelete({ _id: req.params.id }).then(deleted => {
    res.json(deleted);
  });
});

module.exports = router;
