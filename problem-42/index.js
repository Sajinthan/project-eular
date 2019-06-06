var triangleNum = function (n) { return 0.5 * n * (n + 1); };
function findTriangleWords(wordList) {
    var alphabets = genAlphabetList('A');
    var wordsSum = [];
    var triangleNumList = [];
    var wordsSumCopy = [];
    var triagleWordsCount = 0;
    wordList.forEach(function (word) {
        var sum = 0;
        for (var i = 0; i < word.length; i++) {
            sum += getCharacterValue(word.charAt(i), alphabets);
        }
        wordsSum.push(sum);
    });
    wordsSumCopy = wordsSum.slice();
    wordsSumCopy.sort(function (a, b) { return b - a; });
    triangleNumList = getTriangleNumList(wordsSumCopy[0]);
    triangleNumList.forEach(function (num) {
        var count = wordsSum.filter(function (sum) { return sum === num; }).length;
        triagleWordsCount += count;
    });
    return triagleWordsCount;
}
function getTriangleNumList(limit) {
    var triangleNumlist = [];
    for (var i = 1; i > 0; i++) {
        if (triangleNumlist[triangleNumlist.length - 1] > limit) {
            triangleNumlist.pop();
            break;
        }
        else {
            triangleNumlist.push(triangleNum(i));
        }
    }
    return triangleNumlist;
}
function getCharacterValue(letter, alphabets) {
    var value = 0;
    alphabets.forEach(function (item, index) {
        if (item === letter) {
            return (value = index + 1);
        }
    });
    return value;
}
function genAlphabetList(startingLetter) {
    var alphabets = [];
    var charCode = startingLetter.charCodeAt(0);
    for (var i = 0; i < 26; i++) {
        var lettersCharCode = charCode + i;
        alphabets.push(String.fromCharCode(lettersCharCode));
    }
    return alphabets;
}
