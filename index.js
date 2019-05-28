function getTotalNamesScores(namesList) {
    var sortedNamesList = namesList.sort();
    var alphabets = genAlphabetList('A');
    sortedNamesList.forEach(function (name, index) {
        calNamesScore(name, alphabets, index + 1);
    });
}
function calNamesScore(name, alphabets, position) {
    var nameScore = 0;
    var nameSum = 0;
    for (var i = 0; i < name.length; i++) {
        var letter = name.charAt(i);
        var value = getCharacterValue(letter, alphabets);
        nameSum += value;
        console.log(nameSum);
    }
    return nameScore;
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
