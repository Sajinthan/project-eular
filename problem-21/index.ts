function sumOfAllAmicableNumbers(limit: number): number {
    const amicableNumbers: number[] = [];
    let sumOfAmicableNumbers = 0;

    for (let num = 0; num < limit; num++) {
        let sum = 0;
        let sumOfFoundPair = 0;

        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                sum += i;
            }
        }

        for (let i = 1; i < sum; i++) {
            if (sum % i === 0) {
                sumOfFoundPair += i;
            }
        }

        if (num !== sum && num === sumOfFoundPair) {
            amicableNumbers.push(sumOfFoundPair);
        }
    }

    amicableNumbers.forEach(num => {
        sumOfAmicableNumbers += num;
    });

    return sumOfAmicableNumbers;
}
