type wordList = string[];
declare const wordList: typeof Array;

function getLargeAnagramicSquares(wordList: string[]) {
    const sortedWordList = wordList.sort((a, b) => b.length - a.length);
    const wordListLength = sortedWordList[0].length;
    const getLengthyWordList = sortedWordList.filter(
        item => item.length === wordListLength
    );
    const anagramicPairList = findAnagramPairs(getLengthyWordList);

    if (anagramicPairList.length > 0) {
        const squareNumbers = genSquareNumbers(wordListLength);
        const anagramicWordSquares = findAnagramicSquares(
            anagramicPairList,
            squareNumbers
        );

        if (anagramicWordSquares.length === 0) {
            const remainingWordList = removeWordsByLength(
                wordList,
                wordListLength
            );

            getLargeAnagramicSquares(remainingWordList);
        } else {
            console.log(anagramicWordSquares);
        }
    } else {
        const remainingWordList = removeWordsByLength(wordList, wordListLength);

        getLargeAnagramicSquares(remainingWordList);
    }
}

function findAnagramPairs(wordList: string[]): string[] {
    const foundWords = [];
    const anagramicPairList = [];

    wordList.forEach(item => {
        if (foundWords.filter(word => word === item).length === 0) {
            const withoutCurrentWord = wordList.filter(word => word !== item);
            const anagramicPair = getAnagramicWord(item, withoutCurrentWord);

            if (anagramicPair) {
                foundWords.push(anagramicPair);
                anagramicPairList.push(`${item} ${anagramicPair}`);
            }
        }
    });

    return anagramicPairList;
}

function getAnagramicWord(word: string, wordList: string[]): string {
    let anagramicPair: string;
    const wordLength = word.length;

    wordList.forEach(item => {
        for (let i = 0; i < wordLength; i++) {
            if (isAnagramicPair(word, item)) {
                return (anagramicPair = item);
            }
        }
    });

    return anagramicPair;
}

function isAnagramicPair(firstWord: string, secondWord: string): boolean {
    const limit = firstWord.length;
    const firstWordList = [];
    const secondWordList = [];
    let flag = true;

    for (let i = 0; i < limit; i++) {
        firstWordList.push(firstWord.charAt(i));
        secondWordList.push(secondWord.charAt(i));
    }

    firstWordList.sort();
    secondWordList.sort();

    firstWordList.forEach((item, index) => {
        if (item !== secondWordList[index]) {
            return (flag = false);
        }
    });

    return flag;
}

function findAnagramicSquares(wordList: string[], numberList: number[]) {
    const anagramicWordSquares = [];

    wordList.forEach(wordPair => {
        const anagramicPairNumber = findAnagramicSquareNumbers(
            wordPair,
            numberList
        );

        if (anagramicPairNumber) {
            anagramicWordSquares.push(`${wordPair} ${anagramicPairNumber}`);
        }
    });

    return anagramicWordSquares;
}

function findAnagramicSquareNumbers(
    wordPair: string,
    numberList: number[]
): string {
    let anagramicPairNumber = '';

    numberList.forEach(num => {
        const validWordNumPair = isNumberValidForWord(wordPair, num);

        if (validWordNumPair) {
            const wordIndexes = findCharacterPositions(wordPair);
            const predictedNumber = getNumberBasedOnWordPosition(
                wordIndexes,
                num
            );

            if (predictedNumber.toString().length === num.toString().length) {
                const foundNumber = numberList.filter(
                    item => item === predictedNumber
                );

                if (foundNumber.length > 0 && num !== foundNumber[0]) {
                    return (anagramicPairNumber = `${num.toString()} ${
                        foundNumber[0]
                    }`);
                }
            }
        }
    });

    return anagramicPairNumber;
}

function isNumberValidForWord(wordPair: string, num: number): boolean {
    const firstWord = wordPair.split(' ')[0];
    const wordList = [];
    const numberList = [];

    for (let i = 0; i < num.toString().length; i++) {
        const digit = num.toString().charAt(i);
        const letter = firstWord.charAt(i);
        const isExist = !!numberList.filter(item => item === digit)[0];
        if (isExist) {
            const digitIndex = numberList.indexOf(letter);
            const wordFromList = wordList[digitIndex];

            if (wordFromList === letter) {
                numberList.push(digit);
                wordList.push(letter);
            } else {
                return false;
            }
        } else {
            numberList.push(digit);
            wordList.push(letter);
        }
    }

    return true;
}

function getNumberBasedOnWordPosition(
    wordIndexes: string,
    squareNumber: number
): number {
    let predictedNumber = '';

    for (let i = 0; i < wordIndexes.length; i++) {
        const index = Number(wordIndexes.charAt(i));
        predictedNumber = predictedNumber.concat(
            squareNumber.toString().charAt(index)
        );
    }

    return Number(predictedNumber);
}

function findCharacterPositions(wordPair: string): string {
    const wordSet = wordPair.split(' ');
    const limit = wordSet[0].length;
    let wordIndexes = '';

    for (let i = 0; i < limit; i++) {
        const letter = wordSet[0].charAt(i);
        wordIndexes = wordIndexes.concat(wordSet[1].indexOf(letter).toString());
    }

    return wordIndexes;
}

function removeWordsByLength(
    wordList: string[],
    characterLength: number
): string[] {
    return wordList.filter(word => word.length !== characterLength);
}

function genSquareNumbers(digitLength: number = 0): number[] {
    const startAt = Math.round(Math.sqrt(10 ** (digitLength - 1)));
    const limit = Math.round(Math.sqrt(10 ** digitLength - 1));
    const squareNumbers: number[] = [];

    for (let i = startAt; i <= limit; i++) {
        if (i === startAt || i === limit) {
            if ((i ** 2).toString().length === digitLength) {
                squareNumbers.push(i ** 2);
            }
        } else {
            squareNumbers.push(i ** 2);
        }
    }

    return squareNumbers.reverse();
}
