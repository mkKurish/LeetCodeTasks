/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    const result = []
    for (let i = 0; i < arr.length; i++){
        result.push(fn(arr[i]))
    }
    mergeSort(arr, result, 0, result.length - 1)
    return arr
};

function mergeSort(initial, actual, l, r) {
    if (l >= r)
        return
    const mid = Math.floor((l + r) / 2)
    mergeSort(initial, actual, l, mid)
    mergeSort(initial, actual, mid + 1, r)
    merge(initial, actual, l, mid, r)
}

function merge(initial, arr, l, m, r) {
    if (arr[m] < arr[m + 1])
        return
    let j = m + 1
    while (l <= m && j <= r){
        if (arr[l] <= arr[j])
            l++
        else{
            let [val, i_val] = [arr[j], initial[j]]
            let index = j
            while (index != l){
                arr[index] = arr[index - 1]
                initial[index] = initial[index - 1]
                index--
            }
            arr[l] = val
            initial[l] = i_val

            l++
            m++
            j++
        }
    }
}