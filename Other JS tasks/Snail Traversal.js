/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    if (this.length != rowsCount * colsCount)
        return []
    const result = []
    let j = 0
    while (j < rowsCount){
        let i = 0
        const localResult = []
        while (i < colsCount){
            const colI = i % 2 == 0 ? i * rowsCount + j : (i + 1) * rowsCount - 1 - j
            localResult.push(this[colI])
            i++
        }
        result.push(localResult)
        j++
    }
    return result
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */