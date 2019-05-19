type BigInt = number;
declare const BigInt: typeof Number;

function fibonacciSequenceTerm(): number {
    let newNum = BigInt(0);
    let preNum = BigInt(1);
    let term = 0;

    for (let i = 1; i > 0; i++) {
        if (newNum.toString().length === 1000) {
            break;
        }

        const temp = newNum;
        newNum = preNum + newNum;
        preNum = temp;
        term = i;
    }

    return term;
}
