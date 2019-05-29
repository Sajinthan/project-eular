function getReciprocalCycles(limit) {
    var count = 1;
    var listOfNumbers = [];
    var listOfNumbersCopy = listOfNumbers.slice();
    for (var i = 2; i < limit; i++) {
        count++;
        listOfNumbers.push(1 / i);
    }
    listOfNumbers.sort(function (a, b) { return b.toString().length - a.toString().length; });
    console.log(listOfNumbers);
    console.log(listOfNumbersCopy);
}
