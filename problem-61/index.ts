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

function getCyclicNumbers() {
    const maxLimit = 9999;
    const triangleNumList = [];
    const squareNumList = [];
    const pentagonalNumList = [];

    for (let i = 1; triangle(i) < maxLimit; i++) {
        const triangleNumber = triangle(i);

        if (isNumberContainFourDigits(triangleNumber)) {
            triangleNumList.push(triangleNumber);
        }
    }

    for (let i = 1; square(i) < maxLimit; i++) {
        const squareNumber = square(i);

        if (isNumberContainFourDigits(squareNumber)) {
            squareNumList.push(squareNumber);
        }
    }

    for (let i = 1; pentagonal(i) < maxLimit; i++) {
        const pentagonalNumber = pentagonal(i);

        if (isNumberContainFourDigits(pentagonalNumber)) {
            pentagonalNumList.push(pentagonalNumber);
        }
    }

    createNewSortedNumList(triangleNumList, squareNumList, pentagonalNumList);
}

function createNewSortedNumList(
    triangleNumList: number[],
    squareNumList: number[],
    pentagonalNumList: number[]
) {
    const triangleNumListSortByEnd = getSortingListByEndNumbers(
        triangleNumList
    );
    const squareNumListSortByEnd = getSortingListByEndNumbers(squareNumList);
    const pentagonalNumListSortByEnd = getSortingListByEndNumbers(
        pentagonalNumList
    );

    findCyclicPairs(
        triangleNumList,
        triangleNumListSortByEnd,
        squareNumList,
        squareNumListSortByEnd,
        pentagonalNumList,
        pentagonalNumListSortByEnd
    );
}

function findCyclicPairs(
    numList1: number[],
    numList1EndSorted: number[],
    numList2: number[],
    numList2EndSorted: number[],
    numList3: number[],
    numList3EndSorted: number[]
) {
    let num1Holder = 0;
    numList1EndSorted.forEach(num1 => {
        if (
            Number(num1Holder.toString().slice(2)) !==
            Number(num1.toString().slice(2))
        ) {
            num1Holder = num1;
            const _filteredNumList1EndSorted = numList1EndSorted.filter(
                item =>
                    Number(item.toString().slice(2)) ===
                    Number(num1.toString().slice(2))
            );

            _filteredNumList1EndSorted.forEach(num => {});
        }
    });
}

function getSortingListByEndNumbers(numList: number[]): number[] {
    return numList.sort(function(numX: number, numY: number): number {
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

function isNumberContainFourDigits(num: number): boolean {
    return num.toString().length === 4;
}
