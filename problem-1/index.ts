// type BigInt = number;
// declare const BigInt: typeof Number;

function findSumOfNaturalNumbers(): number {
    const limit = 1000;
    let sum = 0;

    for (let i = 1; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
}
