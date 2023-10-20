function sameSuiteCheck(hand: Array<string>): boolean {
    var suite: string = hand[0][0];
    for (var i = 1; i < hand.length; i++) {
        if (hand[i][0] != suite) {
            return false
        }
    }
    return true
}