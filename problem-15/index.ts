function findLatticePaths(gridSize: number): number {
    let initGridValues: number[] = [];

    for (let i = 0; i < gridSize; i++) {
        initGridValues.push(1);
    }

    for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
            if (y === 0) {
                initGridValues[y] = initGridValues[y] + 1;
            } else {
                initGridValues[y] += initGridValues[y - 1];
            }
        }
    }

    return initGridValues[initGridValues.length - 1];
}
