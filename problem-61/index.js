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
var selectedNum4 = 0;
var selectedNum5 = 0;
var selectedNum6 = 0;
var listSelectionNumberList = [];
function getCyclicNumbers() {
    var maxLimit = 9999;
    var triangleNumList = [];
    var squareNumList = [];
    var pentagonalNumList = [];
    var hexagonalNumList = [];
    var heptagonalNumList = [];
    var octagonalNumList = [];
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
    for (var i = 1; hexagonal(i) < maxLimit; i++) {
        var hexagonalNumber = hexagonal(i);
        if (isNumberContainFourDigits(hexagonalNumber)) {
            hexagonalNumList.push(hexagonalNumber);
        }
    }
    for (var i = 1; heptagonal(i) < maxLimit; i++) {
        var heptagonalNumber = heptagonal(i);
        if (isNumberContainFourDigits(heptagonalNumber)) {
            heptagonalNumList.push(heptagonalNumber);
        }
    }
    for (var i = 1; octagonal(i) < maxLimit; i++) {
        var octagonalNumber = octagonal(i);
        if (isNumberContainFourDigits(octagonalNumber)) {
            octagonalNumList.push(octagonalNumber);
        }
    }
    createNewSortedNumList(triangleNumList, squareNumList, pentagonalNumList, hexagonalNumList, heptagonalNumList, octagonalNumList);
    return selectedNum1 + ", " + selectedNum2 + ", " + selectedNum3;
}
function createNewSortedNumList(triangleNumList, squareNumList, pentagonalNumList, hexagonalNumList, heptagonalNumList, octagonalNumList) {
    var triangleNumListSortByEnd = getSortingListByEndNumbers(triangleNumList);
    findCyclicPairs(triangleNumListSortByEnd, squareNumList, pentagonalNumList, hexagonalNumList, heptagonalNumList, octagonalNumList);
}
function findCyclicPairs(triangleNumListEndSorted, squareNumList, pentagonalNumList, hexagonalNumList, heptagonalNumList, octagonalNumList) {
    var num1Holder = 0;
    triangleNumListEndSorted.forEach(function (num1) {
        if (getFirstTwoNumbers(num1Holder) !== getFirstTwoNumbers(num1)) {
            num1Holder = num1;
            var _filteredTriangleNumListEndSorted = triangleNumListEndSorted.filter(function (item) { return getFirstTwoNumbers(item) === getFirstTwoNumbers(num1); });
            filterCyclicPairs(_filteredTriangleNumListEndSorted, squareNumList, pentagonalNumList, hexagonalNumList, heptagonalNumList, octagonalNumList, triangleNumListEndSorted);
        }
    });
}
function filterCyclicPairs(list1, list2, list3, list4, list5, list6, triangleNumListEndSorted) {
    var flag = false;
    var listOrder = {
        1: list1,
        2: list2,
        3: list3,
        4: list4,
        5: list5,
        6: list6
    };
    list1.forEach(function (num) {
        var _filteredList2 = list2.filter(function (list2Num) { return getLastTwoNumbers(list2Num) === getFirstTwoNumbers(num); });
        _filteredList2.forEach(function (list2Num) {
            var _filteredList3 = list3.filter(function (list3Num) {
                return getLastTwoNumbers(list3Num) === getFirstTwoNumbers(list2Num);
            });
            _filteredList3.forEach(function (list3Num) {
                var _filteredList4 = list4.filter(function (list4Num) {
                    return getLastTwoNumbers(list4Num) ===
                        getFirstTwoNumbers(list3Num);
                });
                _filteredList4.forEach(function (list4Num) {
                    var _filteredList5 = list5.filter(function (list5Num) {
                        return getLastTwoNumbers(list5Num) ===
                            getFirstTwoNumbers(list4Num);
                    });
                    _filteredList5.forEach(function (list5Num) {
                        var _filteredList6 = list6.filter(function (list6Num) {
                            return getLastTwoNumbers(list6Num) ===
                                getFirstTwoNumbers(list5Num);
                        });
                        console.log(_filteredList6);
                        _filteredList6.forEach(function (list6Num) {
                            var _filteredList1 = list1.filter(function (list1Num) {
                                return getLastTwoNumbers(list1Num) ===
                                    getFirstTwoNumbers(list6Num);
                            });
                            console.log(_filteredList1);
                            _filteredList1.forEach(function (list1Num) {
                                if (isCyclicMatch(list1Num, list2Num, list3Num, list4Num, list5Num, list6Num)) {
                                    selectedNum1 = list1Num;
                                    selectedNum2 = list2Num;
                                    selectedNum3 = list3Num;
                                    flag = true;
                                }
                            });
                        });
                    });
                });
            });
        });
    });
    if (!flag) {
        var numberList = getNumberList();
        // console.log(numberList);
        console.log(triangleNumListEndSorted);
        // console.log(listOrder[1]);
        // filterCyclicPairs(list1, list2, list3, list5, list4, list6);
    }
    return flag;
}
function isCyclicMatch(num1, num2, num3, num4, num5, num6) {
    if (getFirstTwoNumbers(num1) === getLastTwoNumbers(num2) ||
        getFirstTwoNumbers(num1) === getLastTwoNumbers(num3) ||
        getFirstTwoNumbers(num1) === getLastTwoNumbers(num4) ||
        getFirstTwoNumbers(num1) === getLastTwoNumbers(num5) ||
        getFirstTwoNumbers(num1) === getLastTwoNumbers(num6)) {
        return true;
    }
    return false;
}
function getSortingListByEndNumbers(numList) {
    return numList.sort(function (numX, numY) {
        numX = getFirstTwoNumbers(numX);
        numY = getFirstTwoNumbers(numY);
        if (numX < numY) {
            return -1;
        }
        if (numX > numY) {
            return 1;
        }
        return 0;
    });
}
function getNumberList() {
    var numberList = [];
    var _loop_1 = function (i) {
        var genNum = getRandomNumber();
        var num = numberList.filter(function (num) { return num === genNum; });
        if (num.length === 0) {
            numberList.push(genNum);
        }
        if (numberList.length === 5) {
            return "break";
        }
    };
    for (var i = 0; i >= 0; i++) {
        var state_1 = _loop_1(i);
        if (state_1 === "break")
            break;
    }
    return numberList;
}
function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 2;
}
function getFirstTwoNumbers(num) {
    return Number(num.toString().slice(2));
}
function getLastTwoNumbers(num) {
    return Number(num.toString().slice(0, 2));
}
function isNumberContainFourDigits(num) {
    return num.toString().length === 4;
}
