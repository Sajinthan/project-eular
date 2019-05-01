// interface Arr {
//     id: number;
//     parentId: number;
//     ultimatePatentId: number;
//     nodes?: Arr[];
// }
// const arr: Arr = [
//     {
//         id: 1234,
//         parentId: 1234,
//         ultimateParentId: 1234
//     },
//     {
//         id: 1235,
//         parentId: 1234,
//         ultimateParentId: 1234
//     },
//     {
//         id: 1236,
//         parentId: 1234,
//         ultimateParentId: 1234
//     },
//     {
//         id: 1237,
//         parentId: 1235,
//         ultimateParentId: 1234
//     },
//     {
//         id: 1238,
//         parentId: 1235,
//         ultimateParentId: 1234
//     },
//     {
//         id: 1239,
//         parentId: 1236,
//         ultimateParentId: 1234
//     },
//     {
//         id: 1230,
//         parentId: 1236,
//         ultimateParentId: 1234
//     }
// ];
// function createNoteTree(arr: Arr[]) {
//     let newArr: Arr[] = [];
//     let currentList: Arr[] = [];
//     arr.forEach((item, index) => {
//         if (index === 0) {
//             const result = arr.filter(a => a.id === a.parentId);
//             newArr = [...result];
//             currentList = [...result];
//         } else {
//             let result = [];
//             console.log(currentList);
//             currentList.forEach(current => {
//                 console.log(current);
//                 result = [
//                     ...arr.filter(
//                         x => x.parentId === current.id && x.id !== current.id
//                     )
//                 ];
//             });
//             currentList = [...result];
//         }
//     });
//     console.log(newArr);
// }
// createNoteTree(arr);
var isPrimeNumber = function (num) {
    var primeDivision = [2, 3, 5, 7, 11];
    var flag = true;
    primeDivision.forEach(function (prime) {
        if (num !== prime && num % prime === 0) {
            flag = false;
        }
    });
    return flag;
};
var sumAllPrimeNumers = function (primeNumberLimit) {
    var primeSum = 0;
    for (var num = 0; num < primeNumberLimit; num++) {
        if (isPrimeNumber(num)) {
            primeSum += num;
        }
    }
    return primeSum;
};
