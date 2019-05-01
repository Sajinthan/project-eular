type BigInt = number;
declare const BigInt: typeof Number;

function powerDigitSum(power: number) {
    let calPowerTotal = BigInt(2 ** 1000);
    let sum = 0;

    for (let i = 0; i < calPowerTotal.toString().length; i++) {
        sum += Number(calPowerTotal.toString().charAt(i));
    }

    return sum;
}
