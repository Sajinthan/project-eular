function sumOfAllAmicableNumbers(limit) {
    var amicableNumbers = [];
    var sumOfAmicableNumbers = 0;
    for (var num = 0; num < limit; num++) {
        var sum = 0;
        var sumOfFoundPair = 0;
        for (var i = 1; i < num; i++) {
            if (num % i === 0) {
                sum += i;
            }
        }
        for (var i = 1; i < sum; i++) {
            if (sum % i === 0) {
                sumOfFoundPair += i;
            }
        }
        if (num !== sum && num === sumOfFoundPair) {
            amicableNumbers.push(sumOfFoundPair);
        }
    }
    amicableNumbers.forEach(function (num) {
        sumOfAmicableNumbers += num;
    });
    return sumOfAmicableNumbers;
}
