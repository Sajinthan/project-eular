// type BigInt = number;
// declare const BigInt: typeof Number;
var triangle = function (num) { return (num * (num + 1)) / 2; };
var square = function (num) { return num * num; };
var pentagonal = function (num) { return (num * (3 * num - 1)) / 2; };
var hexagonal = function (num) { return num * (2 * num - 1); };
var heptagonal = function (num) { return (num * (5 * num - 3)) / 2; };
var octagonal = function (num) { return num * (3 * num - 2); };
var selectedNum1 = 0;
var selectedNum2 = 0;
var selectedNum3 = 0;
function getCyclicNumbers() {
    var maxLimit = 9999;
    var triangleNumList = [];
    var squareNumList = [];
    var pentagonalNumList = [];
    for (var i = 1; triangle(i) < maxLimit; i++) {
        var triangleNumber = triangle(i);
        if (isNumberContainFourDigits(triangleNumber)) {
            triangleNumList.push(triangleNumber);
        }
    }
    for (var i = 1; square(i) < maxLimit; i++) {
        var squareNumber = square(i);
        if (isNumberContainFourDigits(squareNumber)) {
            squareNumList.push(squareNumber);
        }
    }
    for (var i = 1; pentagonal(i) < maxLimit; i++) {
        var pentagonalNumber = pentagonal(i);
        if (isNumberContainFourDigits(pentagonalNumber)) {
            pentagonalNumList.push(pentagonalNumber);
        }
    }
    createNewSortedNumList(triangleNumList, squareNumList, pentagonalNumList);
}
function createNewSortedNumList(triangleNumList, squareNumList, pentagonalNumList) {
    var triangleNumListSortByEnd = getSortingListByEndNumbers(triangleNumList);
    var squareNumListSortByEnd = getSortingListByEndNumbers(squareNumList);
    var pentagonalNumListSortByEnd = getSortingListByEndNumbers(pentagonalNumList);
    findCyclicPairs(triangleNumList, triangleNumListSortByEnd, squareNumList, squareNumListSortByEnd, pentagonalNumList, pentagonalNumListSortByEnd);
}
function findCyclicPairs(numList1, numList1EndSorted, numList2, numList2EndSorted, numList3, numList3EndSorted) {
    var num1Holder = 0;
    numList1EndSorted.forEach(function (num1) {
        if (Number(num1Holder.toString().slice(2)) !==
            Number(num1.toString().slice(2))) {
            num1Holder = num1;
            var _filteredNumList1EndSorted = numList1EndSorted.filter(function (item) {
                return Number(item.toString().slice(2)) ===
                    Number(num1.toString().slice(2));
            });
            _filteredNumList1EndSorted.forEach(function (num) { });
        }
    });
}
function getSortingListByEndNumbers(numList) {
    return numList.sort(function (numX, numY) {
        numX = Number(numX.toString().slice(2));
        numY = Number(numY.toString().slice(2));
        if (numX < numY) {
            return -1;
        }
        if (numX > numY) {
            return 1;
        }
        return 0;
    });
}
function isNumberContainFourDigits(num) {
    return num.toString().length === 4;
}
