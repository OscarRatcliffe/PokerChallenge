"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sameSuiteCheck = void 0;
function sameSuiteCheck(hand) {
    var suite = hand[0][0];
    for (var i = 1; i < hand.length; i++) {
        if (hand[i][0] != suite) {
            return false;
        }
    }
    return true;
}
exports.sameSuiteCheck = sameSuiteCheck;
