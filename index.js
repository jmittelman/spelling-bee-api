const express = require("express");
const app = express();

const beesController = require("./controllers/bees");
const championsController = require("./controllers/champions");
const sponsorsController = require("./controllers/sponsors");

const parser = require("body-parser");

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.get("/", (req, res) => {
  res.redirect("/api");
});

app.use("/api/bees/", beesController);
app.use("/api/champions/", championsController);
app.use("/api/sponsors/", sponsorsController);

app.listen(8080, () => {
  console.log("app listening on port 8080");
});

module.exports = app;
