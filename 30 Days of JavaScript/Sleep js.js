/**
 * @param {number} millis
 * @return {Promise}
 */
function sleep(millis) {
    return new Promise(r => {
        setTimeout(() => {
            r()
        }, millis);
    })
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */