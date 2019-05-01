type BigInt = number;
declare const BigInt: typeof Number;

const factorialDigit = (n: BigInt, total: BigInt) =>
    total * (n - BigInt(1) !== BigInt(0) ? n - BigInt(1) : BigInt(1));

function getFactorialDigitSum(num: BigInt) {
    let total = BigInt(num);

    for (let i = num; i > 0; i--) {
        total = factorialDigit(BigInt(i), total);
    }

    return getSum(total);
}

function getSum(num: BigInt) {
    let sum = 0;
    const numString = num.toString();

    for (let i = 0; i < numString.length; i++) {
        sum += Number(numString.charAt(i));
    }

    return sum;
}
