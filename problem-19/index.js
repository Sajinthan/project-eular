// const numList = [[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]];
var numList = [
    [75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 4, 82, 47, 65],
    [19, 1, 23, 75, 3, 34],
    [88, 2, 77, 73, 7, 63, 67],
    [99, 65, 4, 28, 6, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]
];
function calculateMaximumPathSum(numList) {
    var maxNumbers = [];
    var index = 0;
    var sum = 0;
    for (var x = 0; x < numList.length; x++) {
        if (x === 0) {
            maxNumbers.push(numList[x][index]);
        }
        if (x !== 0) {
            var leftIndex = index;
            var rightIndex = index + 1;
            if (x + 1 < numList.length) {
                var leftMaxPath = numList[x][leftIndex] + numList[x + 1][leftIndex] >
                    numList[x][leftIndex] + numList[x + 1][leftIndex + 1]
                    ? numList[x][leftIndex] + numList[x + 1][leftIndex]
                    : numList[x][leftIndex] + numList[x + 1][leftIndex + 1];
                var rightMaxPath = numList[x][rightIndex] + numList[x + 1][rightIndex] >
                    numList[x][rightIndex] + numList[x + 1][rightIndex + 1]
                    ? numList[x][rightIndex] + numList[x + 1][rightIndex]
                    : numList[x][rightIndex] +
                        numList[x + 1][rightIndex + 1];
                if (leftMaxPath > rightMaxPath) {
                    maxNumbers.push(numList[x][leftIndex]);
                }
                else {
                    maxNumbers.push(numList[x][rightIndex]);
                    index++;
                }
            }
            if (x === numList.length - 1) {
                var lastNum = maxNumbers[maxNumbers.length - 1];
                if (lastNum + numList[x][index] >
                    lastNum + numList[x][index + 1]) {
                    maxNumbers.push(numList[x][index]);
                }
                else {
                    maxNumbers.push(numList[x][index + 1]);
                }
            }
        }
    }
    for (var i = 0; i < maxNumbers.length; i++) {
        sum += maxNumbers[i];
    }
    return sum;
}
