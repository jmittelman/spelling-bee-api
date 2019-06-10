const express = require("express");
const router = express.Router();

const Bee = require("../models/Bee");

// List all bees
router.get("/", (req, res) => {
  Bee.find({}).then(index => {
    res.json(index);
  });
});

// List a bee by year
router.get("/:year", (req, res) => {
  Bee.findOne({ year: req.params.year }).then(getByYear => {
    res.json(getByYear);
  });
});

// create a new bee

router.post("/", (req, res) => {
  Bee.create(req.body).then(newBee => res.json(newBee));
});

// update a bee by id

router.put("/:id", (req, res) => {
  Bee.findOneAndUpdate({ _id: req.params.id }, req.body).then(updatedBee => {
    res.json(updatedBee);
  });
});

//delete by id

router.delete("/:id", (req, res) => {
  Bee.findOneAndDelete({ _id: req.params.id }).then(deletedBee => {
    res.json(deletedBee);
  });
});

module.exports = router;
