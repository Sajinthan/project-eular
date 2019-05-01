// type BigInt = number;
// declare const BigInt: typeof Number;
var evenNum = function (num) { return num / 2; };
var oddNum = function (num) { return num * 3 + 1; };
function getLongestCollatzSequence(sequenceLimit) {
    var sequenceCount = 0;
    var longestChainStartingNum = 0;
    for (var num = sequenceLimit; num > 0; num--) {
        var currentVal = num;
        var startingNum = num;
        var count = 0;
        for (var i = 0; i >= 0; i++) {
            if (currentVal % 2 === 0) {
                currentVal = evenNum(currentVal);
            }
            else {
                currentVal = oddNum(currentVal);
            }
            count++;
            if (currentVal === 1) {
                if (sequenceCount < count) {
                    sequenceCount = count;
                    longestChainStartingNum = startingNum;
                }
                break;
            }
        }
    }
    return longestChainStartingNum;
}
