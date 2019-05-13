// type BigInt = number;
// declare const BigInt: typeof Number;
function fibonacciSequenceTerm(num) {
    if (num === 1)
        return 1;
    if (num === 0)
        return 0;
    return fibonacciSequenceTerm(num - 1) + fibonacciSequenceTerm(num - 2);
}
