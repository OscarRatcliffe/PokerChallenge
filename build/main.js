"use strict";
const fs = require('fs');
function getData(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        return data;
    }
    catch (err) {
        throw Error(err.toString());
    }
}
var cardValues = {
    SuiteValues: {
        S: "0",
        H: "1",
        D: "2",
        C: "3"
    },
    nonNumValues: {
        A: "01",
        T: "10",
        J: "11",
        Q: "12",
        K: "13"
    }
};
var gamesWon = 0;
try {
    if (fs.existsSync("data/SortedData.json")) {
        const cardList = JSON.parse(getData("data/SortedData.json"));
        console.log(cardList);
    }
    else {
        var handsArray = getData("data/poker.txt").split("\n");
        var cardList = [];
        function formatCardData(value) {
            var singleRoundArray = [];
            var singleHand = value.split(" ");
            function convertToNums(value) {
                var halfIndex = value.length / 2;
                var player1 = value.slice(0, halfIndex);
                var player2 = value.slice(halfIndex);
                var players = [player1, player2];
                var cardValueArray = [];
                for (var i = 0; i < players.length; i++) {
                    cardValueArray[i] += cardValues.SuiteValues[players[i][1]];
                    if (value[0] in cardValues.nonNumValues) {
                        cardValueArray[i] += cardValues.nonNumValues[players[i][0]];
                    }
                    else {
                        cardValueArray[i] += "0";
                        cardValueArray[i] += value[0];
                    }
                }
                return cardValueArray;
            }
            for (var i = 0; i < singleHand.length; i++) {
                singleRoundArray.push(convertToNums(singleHand[i]));
            }
            var singleRoundArraySorted = singleRoundArray.sort();
            return singleRoundArraySorted;
        }
        for (var i = 0; i < handsArray.length; i++) {
            cardList.push(formatCardData(handsArray[i]));
        }
        console.log(cardList);
    }
}
catch (err) {
    console.error(err);
}
