/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    if (intervals.length == 0)
        return [newInterval]
    const ans = intervals
    if (ans.length == 1) {
        if (ans[0][0] > newInterval[0]) {
            if (ans[0][0] > newInterval[1])
                ans.splice(0, 0, newInterval)
            else {
                ans[0][0] = newInterval[0]
                if (ans[0][1] < newInterval[1])
                    ans[0][1] = newInterval[1]
            }
        } else {
            if (ans[0][1] >= newInterval[0]) {
                if (ans[0][1] < newInterval[1])
                    ans[0][1] = newInterval[1]
            } else
                ans.splice(1, 0, newInterval)
        }
    } else {
        let i = 0
        while (i < ans.length) {
            if (ans[i][0] < newInterval[0]) i++
            else break
        }
        ans.splice(i, 0, newInterval)
        if (i != 0) {
            if (ans[i - 1][1] >= ans[i][0]) {
                if (ans[i - 1][1] < ans[i][1])
                    ans[i - 1][1] = ans[i][1]
                ans.splice(i, 1)
            }
            i--
        }
        while (i + 1 < ans.length) {
            if (ans[i][1] >= ans[i + 1][0]) {
                if (ans[i][1] < ans[i + 1][1])
                    ans[i][1] = ans[i + 1][1]
                ans.splice(i + 1, 1)
            } else i++
        }
    }
    return ans
}