function fibonacciSequenceTerm() {
    var newNum = BigInt(0);
    var preNum = BigInt(1);
    var term = 0;
    for (var i = 1; i > 0; i++) {
        if (newNum.toString().length === 1000) {
            break;
        }
        var temp = newNum;
        newNum = preNum + newNum;
        preNum = temp;
        term = i;
    }
    return term;
}
