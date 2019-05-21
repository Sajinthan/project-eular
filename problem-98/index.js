function getLargeAnagramicSquares(wordList) {
    var sortedWordList = wordList.sort(function (a, b) { return b.length - a.length; });
    var wordListLength = sortedWordList[0].length;
    var getLengthyWordList = sortedWordList.filter(function (item) { return item.length === wordListLength; });
    var anagramicPairList = findAnagramPairs(getLengthyWordList);
    if (anagramicPairList.length > 0) {
        var squareNumbers = genSquareNumbers(wordListLength);
        var anagramicWordSquares = findAnagramicSquares(anagramicPairList, squareNumbers);
        if (anagramicWordSquares.length === 0) {
            var remainingWordList = removeWordsByLength(wordList, wordListLength);
            getLargeAnagramicSquares(remainingWordList);
        }
        else {
            console.log(anagramicWordSquares);
        }
    }
    else {
        var remainingWordList = removeWordsByLength(wordList, wordListLength);
        getLargeAnagramicSquares(remainingWordList);
    }
}
function findAnagramPairs(wordList) {
    var foundWords = [];
    var anagramicPairList = [];
    wordList.forEach(function (item) {
        if (foundWords.filter(function (word) { return word === item; }).length === 0) {
            var withoutCurrentWord = wordList.filter(function (word) { return word !== item; });
            var anagramicPair = getAnagramicWord(item, withoutCurrentWord);
            if (anagramicPair) {
                foundWords.push(anagramicPair);
                anagramicPairList.push(item + " " + anagramicPair);
            }
        }
    });
    return anagramicPairList;
}
function getAnagramicWord(word, wordList) {
    var anagramicPair;
    var wordLength = word.length;
    wordList.forEach(function (item) {
        for (var i = 0; i < wordLength; i++) {
            if (isAnagramicPair(word, item)) {
                return (anagramicPair = item);
            }
        }
    });
    return anagramicPair;
}
function isAnagramicPair(firstWord, secondWord) {
    var limit = firstWord.length;
    var firstWordList = [];
    var secondWordList = [];
    var flag = true;
    for (var i = 0; i < limit; i++) {
        firstWordList.push(firstWord.charAt(i));
        secondWordList.push(secondWord.charAt(i));
    }
    firstWordList.sort();
    secondWordList.sort();
    firstWordList.forEach(function (item, index) {
        if (item !== secondWordList[index]) {
            return (flag = false);
        }
    });
    return flag;
}
function findAnagramicSquares(wordList, numberList) {
    var anagramicWordSquares = [];
    wordList.forEach(function (wordPair) {
        var anagramicPairNumber = findAnagramicSquareNumbers(wordPair, numberList);
        if (anagramicPairNumber) {
            anagramicWordSquares.push(wordPair + " " + anagramicPairNumber);
        }
    });
    return anagramicWordSquares;
}
function findAnagramicSquareNumbers(wordPair, numberList) {
    var anagramicPairNumber = '';
    numberList.forEach(function (num) {
        var wordIndexes = findCharacterPositions(wordPair);
        var predictedNumber = getNumberBasedOnWordPosition(wordIndexes, num);
        if (predictedNumber.toString().length === num.toString().length) {
            var foundNumber = numberList.filter(function (item) { return item === predictedNumber; });
            if (foundNumber.length > 0 && num !== foundNumber[0]) {
                return (anagramicPairNumber = num.toString() + " " + foundNumber[0]);
            }
        }
    });
    return anagramicPairNumber;
}
function isNumberValidForWord(wordPair, num) {
    var firstWord = wordPair.split(' ')[0];
}
function getNumberBasedOnWordPosition(wordIndexes, squareNumber) {
    var predictedNumber = '';
    for (var i = 0; i < wordIndexes.length; i++) {
        var index = Number(wordIndexes.charAt(i));
        predictedNumber = predictedNumber.concat(squareNumber.toString().charAt(index));
    }
    return Number(predictedNumber);
}
function findCharacterPositions(wordPair) {
    var wordSet = wordPair.split(' ');
    var limit = wordSet[0].length;
    var wordIndexes = '';
    for (var i = 0; i < limit; i++) {
        var letter = wordSet[0].charAt(i);
        wordIndexes = wordIndexes.concat(wordSet[1].indexOf(letter).toString());
    }
    return wordIndexes;
}
function removeWordsByLength(wordList, characterLength) {
    return wordList.filter(function (word) { return word.length !== characterLength; });
}
function genSquareNumbers(digitLength) {
    if (digitLength === void 0) { digitLength = 0; }
    var startAt = Math.round(Math.sqrt(Math.pow(10, (digitLength - 1))));
    var limit = Math.round(Math.sqrt(Math.pow(10, digitLength) - 1));
    var squareNumbers = [];
    for (var i = startAt; i <= limit; i++) {
        if (i === startAt || i === limit) {
            if ((Math.pow(i, 2)).toString().length === digitLength) {
                squareNumbers.push(Math.pow(i, 2));
            }
        }
        else {
            squareNumbers.push(Math.pow(i, 2));
        }
    }
    return squareNumbers.reverse();
}
