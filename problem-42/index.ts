type wordList = string[];
declare const wordList: typeof Array;

const triangleNum = (n: number) => 0.5 * n * (n + 1);

function findTriangleWords(wordList: string[]): number {
    const alphabets: string[] = genAlphabetList('A');
    const wordsSum = [];
    let triangleNumList: number[] = [];
    let wordsSumCopy = [];
    let triagleWordsCount = 0;

    wordList.forEach(word => {
        let sum = 0;

        for (let i = 0; i < word.length; i++) {
            sum += getCharacterValue(word.charAt(i), alphabets);
        }
        wordsSum.push(sum);
    });

    wordsSumCopy = [...wordsSum];
    wordsSumCopy.sort((a, b) => b - a);
    triangleNumList = getTriangleNumList(wordsSumCopy[0]);

    triangleNumList.forEach(num => {
        const count = wordsSum.filter(sum => sum === num).length;
        triagleWordsCount += count;
    });

    return triagleWordsCount;
}

function getTriangleNumList(limit: number): number[] {
    const triangleNumlist: number[] = [];

    for (let i = 1; i > 0; i++) {
        if (triangleNumlist[triangleNumlist.length - 1] > limit) {
            triangleNumlist.pop();
            break;
        } else {
            triangleNumlist.push(triangleNum(i));
        }
    }

    return triangleNumlist;
}

function getCharacterValue(letter: string, alphabets: string[]): number {
    let value = 0;
    alphabets.forEach((item, index) => {
        if (item === letter) {
            return (value = index + 1);
        }
    });

    return value;
}

function genAlphabetList(startingLetter: string): string[] {
    const alphabets: string[] = [];
    const charCode: number = startingLetter.charCodeAt(0);

    for (let i = 0; i < 26; i++) {
        const lettersCharCode = charCode + i;
        alphabets.push(String.fromCharCode(lettersCharCode));
    }

    return alphabets;
}
