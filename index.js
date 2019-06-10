const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const beesController = require("./controllers/bees");
const championsController = require("./controllers/champions");
const sponsorsController = require("./controllers/sponsors");

const app = express();

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.redirect("/api/bees");
});

app.use("/api/bees/", beesController);
app.use("/api/champions/", championsController);
app.use("/api/sponsors/", sponsorsController);

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

// app.listen(8082, () => {
//   console.log("app listening on port 8082");
// });

module.exports = app;
