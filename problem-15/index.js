function findLatticePaths(gridSize) {
    var initGridValues = [];
    for (var i = 0; i < gridSize; i++) {
        initGridValues.push(1);
    }
    for (var x = 0; x < gridSize; x++) {
        for (var y = 0; y < gridSize; y++) {
            if (y === 0) {
                initGridValues[y] = initGridValues[y] + 1;
            }
            else {
                initGridValues[y] += initGridValues[y - 1];
            }
        }
    }
    return initGridValues[initGridValues.length - 1];
}
