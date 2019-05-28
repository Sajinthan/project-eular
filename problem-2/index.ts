type BigInt = number;
declare const BigInt: typeof Number;

function fibonacciSequenceTerm(): number {
    let newNum = 0;
    let preNum = 1;
    let sum = 0;

    for (let i = 1; i > 0; i++) {
        if (newNum > 4000000) {
            break;
        } else {
            if (newNum % 2 === 0) {
                sum += newNum;
            }
        }

        const temp = newNum;
        newNum = preNum + newNum;
        preNum = temp;
    }

    return sum;
}
