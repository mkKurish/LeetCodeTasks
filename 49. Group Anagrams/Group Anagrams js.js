var groupAnagrams = function(strs) {
    const groups = new Map()
    strs.forEach((el) => {
        const sel = sortedString(el)
        if (groups.has(sel))
            groups.get(sel).push(el)
        else
            groups.set(sel, [el])
    })
    // const ans = []
    // for (let val of groups.values()){
    //     ans.push(val)
    // }
    // return ans
    return Array.from(groups.values())
};

const sortedString = s => s.split('').sort().join()