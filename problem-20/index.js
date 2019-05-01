var factorialDigit = function (n, total) {
    return total * (n - BigInt(1) !== BigInt(0) ? n - BigInt(1) : BigInt(1));
};
function getFactorialDigitSum(num) {
    var total = BigInt(num);
    for (var i = num; i > 0; i--) {
        total = factorialDigit(BigInt(i), total);
    }
    return getSum(total);
}
function getSum(num) {
    var sum = 0;
    var numString = num.toString();
    for (var i = 0; i < numString.length; i++) {
        sum += Number(numString.charAt(i));
    }
    return sum;
}
