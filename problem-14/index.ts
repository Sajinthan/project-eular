// type BigInt = number;
// declare const BigInt: typeof Number;
const evenNum = (num: number): number => num / 2;
const oddNum = (num: number): number => num * 3 + 1;

function getLongestCollatzSequence(sequenceLimit: number) {
    let sequenceCount = 0;
    let longestChainStartingNum = 0;

    for (let num = sequenceLimit; num > 0; num--) {
        let currentVal = num;
        let startingNum = num;
        let count = 0;

        for (let i = 0; i >= 0; i++) {
            if (currentVal % 2 === 0) {
                currentVal = evenNum(currentVal);
            } else {
                currentVal = oddNum(currentVal);
            }

            count++;

            if (currentVal === 1) {
                if (sequenceCount < count) {
                    sequenceCount = count;
                    longestChainStartingNum = startingNum;
                }

                break;
            }
        }
    }

    return longestChainStartingNum;
}
