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

var cardValues = {
    SuiteValues: {
        S: 0,
        H: 1,
        D: 2,
        C: 3
    },
    nonNumValues: {
        A: 1,
        J: 11,
        Q: 12,
        K: 13
    }
};

// -----------
// Import data
// -----------
 
var gamesWon: number = 0;

try {
    if (fs.existsSync("../data/SortedData.json")) {
        
      const cardList = JSON.parse(getData("../data/SortedData.json"));
      console.log(cardList)

    } else {
        
        var cardListUnsorted: Array<Array<Array<Number>>> = [];
        console.log(getData("../data/poker.txt"))
        
    }

} catch(err) {
    console.error(err)
}