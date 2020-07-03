/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.nextLevel = {};
    this.val = void 0;
    this.count = 0;
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curLevel = this.nextLevel;
    for (let i in word) {
        let j = parseInt(i);
        if (curLevel[word[j]] === void 0) {
            curLevel[word[j]] = new Trie();
            curLevel[word[j]].val = word[i];
        }
        if (j === word.length-1) {
            curLevel[word[j]].count ++;
        }
        curLevel = curLevel[word[j]].nextLevel
    }
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curLevel = this.nextLevel;
    for (let i in word) {
        let j = parseInt(i);
        if (curLevel[word[j]] === void 0) {
            return false
        }
        if (j === word.length-1) {
            return curLevel[word[j]].count > 0;
        }
        curLevel = curLevel[word[j]].nextLevel
    }
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curLevel = this.nextLevel;
    for (let i in prefix) {
        let j = parseInt(i);
        if (curLevel[prefix[j]] === void 0) {
            return false;
        }
        curLevel = curLevel[prefix[j]].nextLevel
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */