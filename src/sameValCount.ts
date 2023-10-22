function sameValCount(hand: Array<string>): Array<string | number> {

    var values: Array<string | number> = [];

    for (var i = 0; i < hand.length; i++) {

        if (hand[i] in values) {

            var valueIndex = values.indexOf(hand[i]);
            values[valueIndex]

        }
    }

    return values;

}