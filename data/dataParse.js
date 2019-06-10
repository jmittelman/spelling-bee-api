const source = require("./source.json");
const fs = require("fs");

const sourceArray = source.map(object => {
  if (object.hasOwnProperty("multiple")) {
    let returnObject = {
      year: object.year,
      champion: []
    };
    if (object.hasOwnProperty("first")) {
      let sponsorArray = object.first.sponsor.split(",");
      let current = {
        name: object.first.champion,
        word: object.first.word,
        definition: object.first.definition,
        sponsorName: sponsorArray[0].trim(),
        sponsorCity: sponsorArray[1].trim(),
        sponsorState: sponsorArray[2].trim()
      };
      returnObject.champion.push(current);
    }
    if (object.hasOwnProperty("second")) {
      let sponsorArray = object.second.sponsor.split(",");
      let current = {
        name: object.second.champion,
        word: object.second.word,
        definition: object.second.definition,
        sponsorName: sponsorArray[0].trim(),
        sponsorCity: sponsorArray[1].trim(),
        sponsorState: sponsorArray[2].trim()
      };
      returnObject.champion.push(current);
    }
    if (object.hasOwnProperty("third")) {
      let sponsorArray = object.third.sponsor.split(",");
      let current = {
        name: object.third.champion,
        word: object.third.word,
        definition: object.third.definition,
        sponsorName: sponsorArray[0].trim(),
        sponsorCity: sponsorArray[1].trim(),
        sponsorState: sponsorArray[2].trim()
      };
      returnObject.champion.push(current);
    }
    if (object.hasOwnProperty("fourth")) {
      let sponsorArray = object.fourth.sponsor.split(",");
      let current = {
        name: object.fourth.champion,
        word: object.fourth.word,
        definition: object.fourth.definition,
        sponsorName: sponsorArray[0].trim(),
        sponsorCity: sponsorArray[1].trim(),
        sponsorState: sponsorArray[2].trim()
      };
      returnObject.champion.push(current);
    }
    if (object.hasOwnProperty("fifth")) {
      let sponsorArray = object.fifth.sponsor.split(",");
      let current = {
        name: object.fifth.champion,
        word: object.fifth.word,
        definition: object.fifth.definition,
        sponsorName: sponsorArray[0].trim(),
        sponsorCity: sponsorArray[1].trim(),
        sponsorState: sponsorArray[2].trim()
      };
      returnObject.champion.push(current);
    }
    if (object.hasOwnProperty("sixth")) {
      let sponsorArray = object.sixth.sponsor.split(",");
      let current = {
        name: object.sixth.champion,
        word: object.sixth.word,
        definition: object.sixth.definition,
        sponsorName: sponsorArray[0].trim(),
        sponsorCity: sponsorArray[1].trim(),
        sponsorState: sponsorArray[2].trim()
      };
      returnObject.champion.push(current);
    }
    if (object.hasOwnProperty("seventh")) {
      let sponsorArray = object.seventh.sponsor.split(",");
      let current = {
        name: object.seventh.champion,
        word: object.seventh.word,
        definition: object.seventh.definition,
        sponsorName: sponsorArray[0].trim(),
        sponsorCity: sponsorArray[1].trim(),
        sponsorState: sponsorArray[2].trim()
      };
      returnObject.champion.push(current);
    }
    if (object.hasOwnProperty("eigth")) {
      let sponsorArray = object.eigth.sponsor.split(",");
      let current = {
        name: object.eigth.champion,
        word: object.eigth.word,
        definition: object.eigth.definition,
        sponsorName: sponsorArray[0].trim(),
        sponsorCity: sponsorArray[1].trim(),
        sponsorState: sponsorArray[2].trim()
      };
      returnObject.champion.push(current);
    }
    return returnObject;
  } else {
    let sponsorArray = object.sponsor.split(",");
    return {
      year: object.year,
      champion: [
        {
          name: object.champion,
          word: object.word,
          definition: object.definition,
          sponsorName: sponsorArray[0].trim(),
          sponsorCity: sponsorArray[1].trim(),
          sponsorState: sponsorArray[2].trim()
        }
      ]
    };
  }
});

const beesArray = source.map(bee => {
  const beeObject = {
    year: bee.year
  };
  return beeObject;
});

let championsArray = [];

const championParse = sourceArray.forEach(champion => {
  for (let i = 0; i < champion.champion.length; i++) {
    let current = {
      name: champion.champion[i].name,
      winningWord: {
        word: champion.champion[i].word,
        definition: champion.champion[i].definition
      }
    };
    championsArray.push(current);
  }
});

let sponsorsArray = [];
const sponsorParse = sourceArray.forEach(sponsor => {
  for (let i = 0; i < sponsor.champion.length; i++) {
    let current = {
      name: sponsor.champion[i].sponsorName,
      city: sponsor.champion[i].sponsorCity,
      state: sponsor.champion[i].sponsorState
    };
    sponsorsArray.push(current);
  }
});

fs.writeFile(
  "./data/champions1.json",
  JSON.stringify(championsArray, null, 2),
  err => {
    if (err) throw err;
    console.log("champions file updated");
  }
);

fs.writeFile(
  "./data/newSource.json",
  JSON.stringify(sourceArray, null, 2),
  err => {
    if (err) throw err;
    console.log("new source file updated");
  }
);

fs.writeFile(
  "./data/sponsors1.json",
  JSON.stringify(sponsorsArray, null, 2),
  err => {
    if (err) throw err;
    console.log("sponsors file updated");
  }
);

fs.writeFile("./data/bees1.json", JSON.stringify(beesArray, null, 2), err => {
  if (err) throw err;
  console.log("bees file updated");
});
