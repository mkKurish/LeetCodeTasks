var carFleet = function(target, position, speed) {
    const map = new Map()
    let res = 0
    let lastTime = -1
    position.forEach((pos, ind) => {
        map.set(pos, speed[ind])
    })
    const sortedPos = [...map.keys()].sort((a, b) => b - a)
    sortedPos.forEach(pos => {
        const time = (target - pos) / map.get(pos)
        if(time > lastTime){ 
            res++
            lastTime = time
        }
    })
    return res
}