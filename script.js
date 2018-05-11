const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

const container = document.querySelector("main");

const katas = {
    1: function (){
        const arrayifiedString = gotCitiesCSV.split(",");
        printKata(1, JSON.stringify(arrayifiedString));
    },

    2: function (){
        const arrayifiedString = bestThing.split(" ");
        printKata(2, JSON.stringify(arrayifiedString));
    },

    3: function (){
        //() => {}
        const arrayifiedString = gotCitiesCSV.split(",");
        const joinedWithSemicolon = arrayifiedString.join(";");
        printKata(3, JSON.stringify(joinedWithSemicolon));
     },
    4: function (){
        //() => {}
        //join = array into strings   split is strings into array
        const joinedWithComma = lotrCitiesArray.join(",");
        printKata(4, JSON.stringify(joinedWithComma));
    },
    5: function (){
        let firstFiveCities = "";
        for (let i=0; i < 5; i++){
            firstFiveCities += lotrCitiesArray[i]
            if (i < 4) {
                firstFiveCities += ", ";
            }
        }
        printKata(5, JSON.stringify(firstFiveCities));
         },

     6: function (){
         let lastFiveCities = "";
         const startingIndex = lotrCitiesArray.length - 5;
         for (let i = startingIndex; i < lotrCitiesArray.length; i++){
            lastFiveCities += lotrCitiesArray[i]

            if (i < lotrCitiesArray.length - 1) {
                lastFiveCities += ", ";
             }
        }
         printKata(6, JSON.stringify(lastFiveCities));
     },
    
     7: function (){
        let thirdThroughFifthCities = "";
        const startingIndex = 2;
        const terminatingIndex = 4 + 1;
        for (let i = startingIndex; i < terminatingIndex; i++){
           thirdThroughFifthCities += lotrCitiesArray[i]

           if (i < lotrCitiesArray.length - 1) {
               thirdThroughFifthCities += ", ";
            }
       }
        printKata(7, JSON.stringify(thirdThroughFifthCities));
    },















}

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