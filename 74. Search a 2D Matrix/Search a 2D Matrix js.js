// very simple :D
var searchMatrix = function(matrix, target) {
    const flatNums = matrix.flat()
    let [l, r] = [0, flatNums.length - 1]
    let mid = Math.floor((l + r) / 2)
    while (l <= r){
        if (flatNums[mid] == target)
            return true
        if (flatNums[mid] > target)
            r = mid - 1
        else
            l = mid + 1
        mid = Math.floor((l + r) / 2)
    }
    return false
};

// little bit harder
var searchMatrix2 = function(matrix, target) {
    const [n, m] = [matrix.length, matrix[0].length]
    let [l, r] = [0, n * m - 1]
    let mid = Math.floor((l + r) / 2)
    while (l <= r){
        const [cordI, cordJ] = [Math.floor(mid / m), mid % m]
        if (matrix[cordI][cordJ] == target)
            return true
        if (matrix[cordI][cordJ] > target)
            r = mid - 1
        else
            l = mid + 1
        mid = Math.floor((l + r) / 2)
    }
    return false
};