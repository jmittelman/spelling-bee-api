const Bee = require("./models/Bee");
const Champion = require("./models/Champion");
const Sponsor = require("./models/Sponsor");

const bees = require("./data/bees.json");
const champions = require("./data/champions.json");
const sponsors = require("./data/sponsors");

const beesData = require("./data/bees.json");
const championsData = require("./data/champions.json");

const beeSeedData = beesData.map(bee => {
  const championCut = JSON.parse(JSON.stringify(bee));
  delete championCut.champion;
  return championCut;
});

const championSeedData = championsData.map(champion => {
  const sponsorCut = JSON.parse(JSON.stringify(champion));
  delete sponsorCut.sponsor;
  return sponsorCut;
});

Bee.find({}).remove(() =>
  Bee.create(beeSeedData).then(res => console.log(res))
);

Champion.find({}).remove(() =>
  Champion.create(championSeedData).then(res => console.log(res))
);

Sponsor.find({}).remove(() =>
  Sponsor.create(sponsors).then(res => console.log(res))
);
