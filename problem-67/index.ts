type numList = number[][];
declare const numList: typeof Array;

function calculateMaximumPathSum(numList: number[][]) {
    const maxNumbers = [];
    let index = 0;
    let sum = 0;

    for (let x = 0; x < numList.length; x++) {
        if (x === 0) {
            maxNumbers.push(numList[x][index]);
        }

        if (x !== 0) {
            const leftIndex = index;
            const rightIndex = index + 1;

            if (x + 1 < numList.length) {
                const leftMaxPath =
                    numList[x][leftIndex] + numList[x + 1][leftIndex] >
                    numList[x][leftIndex] + numList[x + 1][leftIndex + 1]
                        ? numList[x][leftIndex] + numList[x + 1][leftIndex]
                        : numList[x][leftIndex] + numList[x + 1][leftIndex + 1];

                const rightMaxPath =
                    numList[x][rightIndex] + numList[x + 1][rightIndex] >
                    numList[x][rightIndex] + numList[x + 1][rightIndex + 1]
                        ? numList[x][rightIndex] + numList[x + 1][rightIndex]
                        : numList[x][rightIndex] +
                          numList[x + 1][rightIndex + 1];

                if (leftMaxPath > rightMaxPath) {
                    maxNumbers.push(numList[x][leftIndex]);
                } else {
                    maxNumbers.push(numList[x][rightIndex]);
                    index++;
                }
            }

            if (x === numList.length - 1) {
                const lastNum = maxNumbers[maxNumbers.length - 1];

                if (
                    lastNum + numList[x][index] >
                    lastNum + numList[x][index + 1]
                ) {
                    maxNumbers.push(numList[x][index]);
                } else {
                    maxNumbers.push(numList[x][index + 1]);
                }
            }
        }
    }

    for (let i = 0; i < maxNumbers.length; i++) {
        sum += maxNumbers[i];
    }
    console.log(maxNumbers);

    return sum;
}
