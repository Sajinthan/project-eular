function fibonacciSequenceTerm() {
    var newNum = 0;
    var preNum = 1;
    var sum = 0;
    for (var i = 1; i > 0; i++) {
        if (newNum > 4000000) {
            break;
        }
        else {
            if (newNum % 2 === 0) {
                sum += newNum;
            }
        }
        var temp = newNum;
        newNum = preNum + newNum;
        preNum = temp;
    }
    return sum;
}
