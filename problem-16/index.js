function powerDigitSum(power) {
    var calPowerTotal = BigInt(Math.pow(2, 1000));
    var sum = 0;
    for (var i = 0; i < calPowerTotal.toString().length; i++) {
        sum += Number(calPowerTotal.toString().charAt(i));
    }
    return sum;
}
