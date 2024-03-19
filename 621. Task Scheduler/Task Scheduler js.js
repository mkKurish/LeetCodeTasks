/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const mp = new Map()
    tasks.forEach((task) => {
        if (mp.has(task)){
            mp.set(task, mp.get(task) + 1)
        }
        else {
            mp.set(task, 1)
        }        
    })
    let arr = Array.from(mp.values()).sort((a, b) => b - a)
    const max = arr[0]
    let additional = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == max)
            additional++
        else
            break
    }
    return Math.max((max - 1) * (n + 1) + additional, tasks.length)
};