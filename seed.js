const Bee = require("./models/Bee");
const Champion = require("./models/Champion");
const Sponsor = require("./models/Sponsor");

const beesData = require("./data/bees1.json");
const championsData = require("./data/champions1.json");
const sponsorsData = require("./data/sponsors1.json");
const sourceData = require("./data/newSource.json");

Bee.deleteMany({}).then(() => {
  Bee.create(beesData).then(beeDocs => {
    Champion.deleteMany({}).then(() => {
      Champion.create(championsData).then(championDocs => {
        Sponsor.deleteMany({}).then(() => {
          Sponsor.create(sponsorsData)
            .then(sponsorDocs => {
              beeDocs.forEach(bee => {
                let jsonDoc = sourceData.find(document => {
                  return bee.year === document.year;
                });

                for (let i = 0; i < jsonDoc.champion.length; i++) {
                  Champion.findOne({ name: jsonDoc.champion[i].name }).then(
                    champion => {
                      Bee.findByIdAndUpdate(
                        bee._id,
                        { $push: { champion: champion._id } },
                        { new: true }
                      ).then();
                    }
                  );
                }
              });
            })
            .then(_ => {
              championDocs.forEach(champion => {
                let jsonDoc = sourceData.find(document => {
                  for (let i = 0; i < document.champion.length; i++) {
                    if (champion.name === document.champion[i].name) {
                      return champion.name === document.champion[i].name;
                    }
                  }
                });

                for (let i = 0; i < jsonDoc.champion.length; i++) {
                  Sponsor.findOne({
                    name: jsonDoc.champion[i].sponsorName
                  }).then(returnedSponsor => {
                    Champion.findByIdAndUpdate(
                      champion._id,
                      { sponsor: returnedSponsor._id },
                      { new: true }
                    ).then(returnedChampion => {
                      console.log(returnedChampion);
                    });
                  });
                }
              });
            });
        });
      });
    });
  });
});
