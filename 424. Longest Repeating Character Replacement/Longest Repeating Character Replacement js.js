function countOfDifferentLetters(str, letter) {
    return str.toString().replaceAll(letter, '').length
}
/**
* @param {string} s
* @param {number} k
* @return {number}
*/
var characterReplacement = function (s, k) {
    const charsMap = new Map() // [char, count]
    let realMax = 0
    for (let i = 0; i < s.length; i++) {
        if (!charsMap.has(s[i])) {
            // console.log(`-${s[i]}-`) /////////
            let slidingWindow = ''
            const lastWrong = []
            let shifted = 0
            charsMap.set(s[i], 0)
            for (let j = 0; j < s.length; j++) {
                // console.log('________\nb:', slidingWindow, charsMap.get(s[i])) /////////
                slidingWindow += s[j]
                // console.log('during:', slidingWindow) /////////
                if (s[j] != s[i]) lastWrong.push(j + 1)
                if (countOfDifferentLetters(slidingWindow, s[i]) > k) {
                    // console.log(lastWrong, shifted) /////////
                    slidingWindow = slidingWindow.slice(lastWrong[0] - shifted)
                    shifted += (lastWrong.shift() - shifted)
                }
                charsMap.set(s[i], Math.max(charsMap.get(s[i]), slidingWindow.length))
                realMax = Math.max(realMax, slidingWindow.length)
                // console.log('aft:', slidingWindow, charsMap.get(s[i])) /////////
            }
            charsMap.set(s[i], Math.max(charsMap.get(s[i]), slidingWindow.length))
            realMax = Math.max(realMax, slidingWindow.length)
        }
    }
    // let maxV = 0
    // console.log(charsMap) /////////
    // for (let v of charsMap.values()) {
    //     maxV = Math.max(maxV, v)
    // }
    // return maxV
    return realMax
};

/*
var characterReplacement = function(s, k) {

    let answer = 0
    for (let c = 65; c < 91; c++) {
        let changes = 0
        for (let i = 0, j = 0; i < s.length; i++) {
            if (s[i] !== String.fromCharCode(c)) changes++
            while (k < changes) {
                if (s[j] !== String.fromCharCode(c)) changes--
                j++
            }
            answer = Math.max(answer, i - j + 1)
    }
  }
  return answer
}
*/

// console.log(characterReplacement('ABAB', 2))
// console.log(characterReplacement('AABABBA', 1))
console.log(characterReplacement('AABABABBBAABABAAAAA', 2))