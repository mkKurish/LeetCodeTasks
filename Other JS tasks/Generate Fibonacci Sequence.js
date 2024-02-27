/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let [i, j] = [0, 1]
    while(true){
        const cur = i;
        [i, j] = [j, j + i]
        yield cur
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */