var Trie = function() {
    this.startLayer = {}
    this.maxWordLength = 0 // Or stack implementation for case with delete method
};

Trie.prototype.insert = function(word) {
    let currLayer = this.startLayer
    for (const letter of word){
        if (!currLayer[letter])
            currLayer[letter] = {}
        currLayer = currLayer[letter]
    }
    currLayer['endOfWord'] = true
    this.maxWordLength = Math.max(this.maxWordLength, word.length)
};

Trie.prototype.search = function(word) {
    if (this.maxWordLength < word.length) // Quick check to see if such a word can be in the trie
        return false
    let currLayer = this.startLayer
    for (const letter of word){
        if (!currLayer[letter])
            return false
        currLayer = currLayer[letter]
    }
    return !!currLayer['endOfWord'] // If (exactly) this word was added, it will be true, (otherwise: deleted or not added -> false)
};

Trie.prototype.startsWith = function(prefix) {
    if (this.maxWordLength < prefix.length)
        return false
    let currLayer = this.startLayer
    for (let letter of prefix){
        if (!currLayer[letter])
            return false
        currLayer = currLayer[letter]
    }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */