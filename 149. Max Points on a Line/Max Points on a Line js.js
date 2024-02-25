/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if (points.length < 3)
        return points.length
    let res = 0
    points.forEach((point, index) => {
        const cache = new Map()
        points.forEach((p, i) => {
            let slope
            if (i == index)
                slope = Number.INFINITY
            else
                slope = (p[1] - point[1]) / (p[0] - point[0])
            cache[slope] = cache[slope] ? cache[slope] + 1 : 1
            res = Math.max(res, cache[slope] + 1)
        })
    })
    return res
};