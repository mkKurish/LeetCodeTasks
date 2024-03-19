/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points = points.sort((a, b) => a[0] - b[0])
    let arrows = 1
    let arrX = points[0][0]
    let minEnd = points[0][1]
    for (let i = 1; i < points.length; i++) {
        const [start, end] = points[i]
        if (minEnd < start) {
            arrows++
            minEnd = end
        }
        if (end < minEnd) minEnd = end
        arrX = start
    }
    return arrows
};