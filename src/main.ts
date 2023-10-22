const fs = require('fs')

// -----------
// File import
// -----------

function getData(path: string): any {    
    try {

        const data = fs.readFileSync(path, 'utf8');
        return data;

    } catch (err: any) {

        throw Error(err.toString());

    }
}


// ------
// Lookup
// ------

var cardValues: {
    SuiteValues: { [key: string]: string },
    nonNumValues: { [key: string]: string }
} = {
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


// -----------
// Import data
// -----------
 
var gamesWon: number = 0;

try {
    if (fs.existsSync("data/SortedData.json")) {
        
      const cardList = JSON.parse(getData("data/SortedData.json"));
      console.log(cardList)

    } else {
        
        var handsArray: Array<string> = getData("data/poker.txt").split("\n");

        // ------------------------------------
        // Convert to format SNN Suite:Number)
        // ------------------------------------

        var cardList: Array<Array<Array<string>>> = [];

        function formatCardData(value:string): Array<Array<string>> {

            var singleRoundArray: Array<Array<string>> = [];
            var singleHand: Array<string> = value.split(" ");

            function convertToNums(value: string): any {

                var halfIndex: number = value.length / 2;
                var player1: string = value.slice(0, halfIndex);
                var player2: string = value.slice(halfIndex);
                var players: Array<string> = [player1, player2];

                var cardValueArray: Array<string> = [];

                for (var i = 0; i < players.length; i++) {
    
                    cardValueArray[i] += cardValues.SuiteValues[players[i][1]];
    
                    if (value[0] in cardValues.nonNumValues) {
    
                        cardValueArray[i] += cardValues.nonNumValues[players[i][0]];
                        
                    } else {
    
                        cardValueArray[i] += "0";
                        cardValueArray[i] += value[0];

                    }
                }

            return cardValueArray;

            }

            for (var i = 0; i < singleHand.length; i++) {
                singleRoundArray.push(convertToNums(singleHand[i]));
            }

            var singleRoundArraySorted: Array<Array<string>> = singleRoundArray.sort();

            return singleRoundArraySorted;

        }

        for (var i = 0; i < handsArray.length; i++) {
            cardList.push(formatCardData(handsArray[i]));
        }

        console.log(cardList)
        
    }

} catch(err) {

    console.error(err)

}