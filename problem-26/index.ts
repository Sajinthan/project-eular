type BigInt = number;
declare const BigInt: typeof Number;

function getReciprocalCycles(limit: number): number {
    let count = 1;
    const listOfNumbers: number[] = [];
    const listOfNumbersCopy = [...listOfNumbers];

    for (let i = 2; i < limit; i++) {
        count++;

        listOfNumbers.push(1 / i);
    }

    listOfNumbers.sort((a, b) => b.toString().length - a.toString().length);

    console.log(listOfNumbers);
    console.log(listOfNumbersCopy);
}
