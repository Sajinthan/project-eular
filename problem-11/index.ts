const isPrimeNumber = (num): boolean => {
    const primeDivision = [2, 3, 5, 7, 11];
    let flag = true;

    primeDivision.forEach(prime => {
        if (num !== prime && num % prime === 0) {
            flag = false;
        }
    });

    return flag;
};

const sumAllPrimeNumers = (primeNumberLimit: number) => {
    let primeSum = 0;

    for (let num = 0; num < primeNumberLimit; num++) {
        if (isPrimeNumber(num)) {
            primeSum += num;
        }
    }

    return primeSum;
};
