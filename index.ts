type namesList = string[];
declare const namesList: typeof Array;

function getTotalNamesScores(namesList: string[]) {
    const sortedNamesList = namesList.sort();
    const alphabets = genAlphabetList('A');

    sortedNamesList.forEach((name, index) => {
        calNamesScore(name, alphabets, index + 1);
    });
}

function calNamesScore(
    name: string,
    alphabets: string[],
    position: number
): number {
    let nameScore = 0;
    let nameSum = 0;

    for (let i = 0; i < name.length; i++) {
        const letter = name.charAt(i);
        const value = getCharacterValue(letter, alphabets);
        nameSum += value;
        console.log(nameSum);
    }

    return nameScore;
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
