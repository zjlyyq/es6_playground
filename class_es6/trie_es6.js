class Trie {
    constructor() {
        this.nextLevel = [];
    }
    /**
     * @param {string} word 
     * @return {void}
     */
    insert(word) {
        let level = this.nextLevel;
        for(let c of word){
            if (level[c] === void 0) {
                level[c] = new Trie();
            }
            level = level[c];
        }
        level["#"] = true;
    }

    /**
     * @param {string} word 
     * @return {bollean}
     */
    search(word) {
        let level = this.nextLevel;
        for(let c of word){
            if (level[c] === void 0) {
                return false;
            }
            level = level[c];
        }
        return level["#"] != undefined;
    }
    
    /**
     * 
     * @param {string} word
     * @return {bollean} 
     */
    startsWith(word) {
        let level = this.nextLevel;
        for(let c of word){
            if (level[c] === void 0) {
                return false;
            }
            level = level[c];
        }
        return true;
    }
}

function generateTrieTree() {
    return new Trie()
}

// tree = new Trie()
// tree.insert('hello')
// tree.search('hello')
// tree.startsWith('hel')?
console.log('module.exports === exports?', module.exports === exports)
console.log(module.exports)
// module.exports = generateTrieTree
exports.treeInit = generateTrieTree
console.log(module.exports)
console.log('module.exports === exports?', module.exports === exports)
console.log('eeee')