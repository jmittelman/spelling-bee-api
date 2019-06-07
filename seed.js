const bees = require("./data/bees.json");
const championsData = require("./data/champions.json");
const sponsors = require("./data/sponsors");

const championSeedData = championsData.map(champion => {});

const Bee = require("./models/Bee");
const Champion = require("./models/Champion");
const Sponsor = require("./models/Sponsor");

Bee.find({}).remove(() => Bee.create(bees).then(res => console.log(res)));

Champion.find({}).remove(() =>
  Champion.create(champions).then(res => console.log(res))
);

Sponsor.find({}).remove(() =>
  Sponsor.create(sponsors).then(res => console.log(res))
);
