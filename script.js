const gotCitiesCSV =
  "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = [
  "Mordor",
  "Gondor",
  "Rohan",
  "Beleriand",
  "Mirkwood",
  "Dead Marshes",
  "Rhun",
  "Harad"
];

const bestThing =
  "The best thing about a boolean is even if you are wrong you are only off by a bit";

const container = document.querySelector("main");

const katas = {
  1: function() {
    const arrayifiedString = gotCitiesCSV.split(",");
    printKata(1, JSON.stringify(arrayifiedString));
  },

  2: function() {
    const arrayifiedString = bestThing.split(" ");
    printKata(2, JSON.stringify(arrayifiedString));
  },

  3: function() {
    //() => {}
    const arrayifiedString = gotCitiesCSV.split(",");
    const joinedWithSemicolon = arrayifiedString.join(";");
    printKata(3, JSON.stringify(joinedWithSemicolon));
  },
  4: function() {
    //() => {}
    //join = array into strings   split is strings into array
    const joinedWithComma = lotrCitiesArray.join(",");
    printKata(4, JSON.stringify(joinedWithComma));
  },
  5: function() {
    let firstFiveCities = "";
    for (let i = 0; i < 5; i++) {
      firstFiveCities += lotrCitiesArray[i];
      if (i < 4) {
        firstFiveCities += ", ";
      }
    }
    printKata(5, JSON.stringify(firstFiveCities));
  },

  6: function() {
    let lastFiveCities = "";
    const startingIndex = lotrCitiesArray.length - 5;
    for (let i = startingIndex; i < lotrCitiesArray.length; i++) {
      lastFiveCities += lotrCitiesArray[i];

      if (i < lotrCitiesArray.length - 1) {
        lastFiveCities += ", ";
      }
    }
    printKata(6, JSON.stringify(lastFiveCities));
  },

  7: function() {
    let thirdThroughFifthCities = "";
    const startingIndex = 2;
    const terminatingIndex = 4 + 1;
    for (let i = startingIndex; i < terminatingIndex; i++) {
      thirdThroughFifthCities += lotrCitiesArray[i];

      if (i < lotrCitiesArray.length - 1) {
        thirdThroughFifthCities += ", ";
      }
    }
    printKata(7, JSON.stringify(thirdThroughFifthCities));
  },

  8: function() {
    lotrCitiesArray.splice(lotrCitiesArray.indexOf("Rohan"), 1);

    printKata(8, JSON.stringify(lotrCitiesArray));
  },

  9: function() {
    const startingIndex = lotrCitiesArray.indexOf("Dead Marshes") + 1;
    const numberOfCitiesToDelte = lotrCitiesArray.length - startingIndex;

    lotrCitiesArray.splice(startingIndex, numberOfCitiesToDelte);

    printKata(9, JSON.stringify(lotrCitiesArray));
    //if delete count is omitted, look at Splice MDN
  },

  10: function() {
    const startingIndex = lotrCitiesArray.indexOf("Gondor") + 1;
    lotrCitiesArray.splice(startingIndex, 0, "Rohan");

    printKata(10, JSON.stringify(lotrCitiesArray));
  },

  11: function() {
    const startingIndex = lotrCitiesArray.indexOf("Dead Marshes");
    lotrCitiesArray.splice(startingIndex, 1, "Deadest Marshes");

    printKata(11, JSON.stringify(lotrCitiesArray));
  },

  12: function() {
    const first14Characters = bestThing.slice(0, 13 + 1);

    printKata(12, JSON.stringify(first14Characters));
  },

  13: function() {
    const last12Characters = bestThing.slice(
      bestThing.length - 12,
      bestThing.length
    );
    // const last12Characters = bestThing.slice(-12); Another simpler way to write it
    printKata(13, JSON.stringify(last12Characters));
  },

  14: function() {
    const middle23to38Characters = bestThing.slice(23, 38);
    printKata(14, JSON.stringify(middle23to38Characters));
  },

  15: function() {
    const last12Characters = bestThing.substring(bestThing.length - 12);
    printKata(15, JSON.stringify(last12Characters));
  },

  16: function() {
    const middle23to38Characters = bestThing.substr(23, 15);
    printKata(16, JSON.stringify(middle23to38Characters));
  },

  17: function() {
    const onlyIndex = bestThing.indexOf("only");
    printKata(17, JSON.stringify(onlyIndex));
  },

  18: function() {
    const lastValue = bestThing.lastIndexOf("");
    printKata(18, JSON.stringify(lastValue));
  },

  19: function() {
    let gotCitiesSplit = gotCitiesCSV.split(",");
    let doubleVowelCities =
      gotCitiesSplit.filter(city => city.includes("aa")) +
      "," +
      gotCitiesSplit.filter(city => city.includes("ee")) +
      "," +
      gotCitiesSplit.filter(city => city.includes("ii")) +
      "," +
      gotCitiesSplit.filter(city => city.includes("oo")) +
      "," +
      gotCitiesSplit.filter(city => city.includes("uu"));

    printKata(19, JSON.stringify(doubleVowelCities));
  },

  20: function() {
    const lotrOrCities = lotrCitiesArray.filter(city => city.endsWith("or"));
    printKata(20, JSON.stringify(lotrOrCities));
  },
  21: function() {
    let bestThingSplit = bestThing.split(" ");
    let bestThingStartWithB = bestThingSplit.filter(word =>
      word.startsWith("b")
    );

    printKata(21, JSON.stringify(bestThingStartWithB));
  },
  22: function() {
    let mirkwoodPresent;
    if (lotrCitiesArray.includes("Mirkwood")) {
      mirkwoodPresent = "Yes";
    } else {
      mirkwoodPresent = "No";
    }

    printKata(22, JSON.stringify(mirkwoodPresent));
  },

  23: function() {
    let hollywoodPresent;
    if (lotrCitiesArray.includes("Hollywood") === "true") {
      hollywoodPresent = "Yes";
    } else {
      hollywoodPresent = "No";
    }
    printKata(23, JSON.stringify(hollywoodPresent));
  },

  24: function() {
    const indexMirkwood = lotrCitiesArray.indexOf("Mirkwood");
    printKata(24, JSON.stringify(indexMirkwood));
  },

  25: function() {
    let firstTwoWordCity = lotrCitiesArray.filter(city => city.includes(" "));

    printKata(25, JSON.stringify(firstTwoWordCity[0]));
  },

  26: function() {
    let reversedLotrCitiesArray = lotrCitiesArray.reverse();

    printKata(26, JSON.stringify(reversedLotrCitiesArray));
  },

  27: function() {
    let sortedLotrCitiesArray = lotrCitiesArray.sort();
    printKata(27, JSON.stringify(sortedLotrCitiesArray));
  },

  28: function() {
    let sortedCityLength = lotrCitiesArray.sort((a, b) => a.length - b.length);
    printKata(28, JSON.stringify(sortedCityLength));
  },

  29: function() {
    let poppedLotrCitiesArray = lotrCitiesArray.pop();
    printKata(29, JSON.stringify(lotrCitiesArray));
  },

  30: function() {
    lotrCitiesArray.push("Deadest Marshes");
    printKata(30, JSON.stringify(lotrCitiesArray));
  },

  31: function() {
    lotrCitiesArray.shift();
    printKata(31, JSON.stringify(lotrCitiesArray));
  },

  32: function() {
    lotrCitiesArray.unshift("Rohan");
    printKata(32, JSON.stringify(lotrCitiesArray));
  }
};

for (let kataNumber in katas) {
  katas[kataNumber]();
}

function printKata(kataNumber, objectToPrint) {
  const kataHeading = document.createElement("span");
  kataHeading.textContent = "Kata " + kataNumber + ": ";
  kataHeading.className = "kata-heading";

  const resultElement = document.createElement("article");

  resultElement.appendChild(kataHeading);

  const textNode = document.createTextNode(objectToPrint);
  resultElement.appendChild(textNode);

  container.appendChild(resultElement);
}
