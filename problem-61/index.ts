// type BigInt = number;
// declare const BigInt: typeof Number;

const triangle = (num: number): number => (num * (num + 1)) / 2;
const square = (num: number): number => num * num;
const pentagonal = (num: number): number => (num * (3 * num - 1)) / 2;
const hexagonal = (num: number): number => num * (2 * num - 1);
const heptagonal = (num: number): number => (num * (5 * num - 3)) / 2;
const octagonal = (num: number): number => num * (3 * num - 2);

let selectedNum1 = 0;
let selectedNum2 = 0;
let selectedNum3 = 0;
let selectedNum4 = 0;
let selectedNum5 = 0;
let selectedNum6 = 0;

let listSelectionNumberList = [];

function getCyclicNumbers() {
    const maxLimit = 9999;
    const triangleNumList = [];
    const squareNumList = [];
    const pentagonalNumList = [];
    const hexagonalNumList = [];
    const heptagonalNumList = [];
    const octagonalNumList = [];

    for (let i = 1; triangle(i) < maxLimit; i++) {
        const triangleNumber = triangle(i);

        if (isNumberContainFourDigitsAndNotStartWithZero(triangleNumber)) {
            triangleNumList.push(triangleNumber);
        }
    }

    console.log(triangleNumList);

    for (let i = 1; square(i) < maxLimit; i++) {
        const squareNumber = square(i);

        if (isNumberContainFourDigitsAndNotStartWithZero(squareNumber)) {
            squareNumList.push(squareNumber);
        }
    }

    console.log(squareNumList);

    for (let i = 1; pentagonal(i) < maxLimit; i++) {
        const pentagonalNumber = pentagonal(i);

        if (isNumberContainFourDigitsAndNotStartWithZero(pentagonalNumber)) {
            pentagonalNumList.push(pentagonalNumber);
        }
    }

    console.log(pentagonalNumList);

    for (let i = 1; hexagonal(i) < maxLimit; i++) {
        const hexagonalNumber = hexagonal(i);

        if (isNumberContainFourDigitsAndNotStartWithZero(hexagonalNumber)) {
            hexagonalNumList.push(hexagonalNumber);
        }
    }

    console.log(hexagonalNumList);

    for (let i = 1; heptagonal(i) < maxLimit; i++) {
        const heptagonalNumber = heptagonal(i);

        if (isNumberContainFourDigitsAndNotStartWithZero(heptagonalNumber)) {
            heptagonalNumList.push(heptagonalNumber);
        }
    }

    console.log(heptagonalNumList);

    for (let i = 1; octagonal(i) < maxLimit; i++) {
        const octagonalNumber = octagonal(i);

        if (isNumberContainFourDigitsAndNotStartWithZero(octagonalNumber)) {
            octagonalNumList.push(octagonalNumber);
        }
    }

    console.log(octagonalNumList);

    // createNewSortedNumList(
    //     triangleNumList,
    //     squareNumList,
    //     pentagonalNumList,
    //     hexagonalNumList,
    //     heptagonalNumList,
    //     octagonalNumList
    // );

    return `${selectedNum1}, ${selectedNum2}, ${selectedNum3}`;
}

function createNewSortedNumList(
    triangleNumList: number[],
    squareNumList: number[],
    pentagonalNumList: number[],
    hexagonalNumList: number[],
    heptagonalNumList: number[],
    octagonalNumList: number[]
) {
    const triangleNumListSortByEnd = getSortingListByEndNumbers(
        triangleNumList
    );

    findCyclicPairs(
        triangleNumListSortByEnd,
        squareNumList,
        pentagonalNumList,
        hexagonalNumList,
        heptagonalNumList,
        octagonalNumList
    );
}

function findCyclicPairs(
    triangleNumListEndSorted: number[],
    list2: number[],
    list3: number[],
    list4: number[],
    list5: number[],
    list6: number[]
) {
    const listOrder = {
        1: triangleNumListEndSorted,
        2: list2,
        3: list3,
        4: list4,
        5: list5,
        6: list6
    };
    let num1Holder = 0;
    let flag = false;

    triangleNumListEndSorted.forEach(num1 => {
        if (getFirstTwoNumbers(num1Holder) !== getFirstTwoNumbers(num1)) {
            num1Holder = num1;
            const _filteredTriangleNumListEndSorted = triangleNumListEndSorted.filter(
                item => getFirstTwoNumbers(item) === getFirstTwoNumbers(num1)
            );

            flag = filterCyclicPairs(
                _filteredTriangleNumListEndSorted,
                list2,
                list3,
                list4,
                list5,
                list6
            );
        }
    });

    if (!flag) {
        const numberList = getNumberList();
        // console.log(numberList);
        // console.log(listOrder[1]);

        // console.log(listOrder[1]);

        // findCyclicPairs(
        //     listOrder[1],
        //     listOrder[numberList[0]],
        //     listOrder[numberList[1]],
        //     listOrder[numberList[2]],
        //     listOrder[numberList[3]],
        //     listOrder[numberList[4]]
        // );
    }
}

function filterCyclicPairs(
    list1: number[],
    list2: number[],
    list3: number[],
    list4: number[],
    list5: number[],
    list6: number[]
): boolean {
    let flag = false;

    list1.forEach(num => {
        const _filteredList2 = list2.filter(
            list2Num => getLastTwoNumbers(list2Num) === getFirstTwoNumbers(num)
        );

        _filteredList2.forEach(list2Num => {
            const _filteredList3 = list3.filter(
                list3Num =>
                    getLastTwoNumbers(list3Num) === getFirstTwoNumbers(list2Num)
            );

            _filteredList3.forEach(list3Num => {
                const _filteredList4 = list4.filter(
                    list4Num =>
                        getLastTwoNumbers(list4Num) ===
                        getFirstTwoNumbers(list3Num)
                );

                _filteredList4.forEach(list4Num => {
                    const _filteredList5 = list5.filter(
                        list5Num =>
                            getLastTwoNumbers(list5Num) ===
                            getFirstTwoNumbers(list4Num)
                    );

                    _filteredList5.forEach(list5Num => {
                        const _filteredList6 = list6.filter(
                            list6Num =>
                                getLastTwoNumbers(list6Num) ===
                                getFirstTwoNumbers(list5Num)
                        );
                        console.log(_filteredList6);

                        _filteredList6.forEach(list6Num => {
                            const _filteredList1 = list1.filter(
                                list1Num =>
                                    getLastTwoNumbers(list1Num) ===
                                    getFirstTwoNumbers(list6Num)
                            );

                            console.log(_filteredList1);

                            _filteredList1.forEach(list1Num => {
                                if (
                                    isCyclicMatch(
                                        list1Num,
                                        list2Num,
                                        list3Num,
                                        list4Num,
                                        list5Num,
                                        list6Num
                                    )
                                ) {
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

    console.log(flag);

    return flag;
}

function isCyclicMatch(
    num1: number,
    num2: number,
    num3: number,
    num4: number,
    num5: number,
    num6: number
): boolean {
    if (
        getFirstTwoNumbers(num1) === getLastTwoNumbers(num2) ||
        getFirstTwoNumbers(num1) === getLastTwoNumbers(num3) ||
        getFirstTwoNumbers(num1) === getLastTwoNumbers(num4) ||
        getFirstTwoNumbers(num1) === getLastTwoNumbers(num5) ||
        getFirstTwoNumbers(num1) === getLastTwoNumbers(num6)
    ) {
        return true;
    }

    return false;
}

function getSortingListByEndNumbers(numList: number[]): number[] {
    return numList.sort(function(numX: number, numY: number): number {
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

function getNumberList(): number[] {
    const numberList: number[] = [];

    for (let i = 0; i >= 0; i++) {
        const genNum = getRandomNumber();
        const num = numberList.filter(num => num === genNum);

        if (num.length === 0) {
            numberList.push(genNum);
        }

        if (numberList.length === 5) {
            break;
        }
    }

    return numberList;
}

function getRandomNumber(): number {
    return Math.floor(Math.random() * 5) + 2;
}

function getFirstTwoNumbers(num: number): number {
    return Number(num.toString().slice(2));
}

function getLastTwoNumbers(num: number): number {
    return Number(num.toString().slice(0, 2));
}

function isNumberContainFourDigitsAndNotStartWithZero(num: number): boolean {
    const stringNumber = num.toString();

    return stringNumber.length === 4 && stringNumber.slice(2, 3) !== '0';
}
