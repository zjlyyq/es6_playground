class Trie {
    constructor() {
        this.root = {};
        this.END_OF_WORD = "#";
    }
    /**
     * @param {string} word 
     * @return {void}
     */
    insert(word) {
        let node = this.root;
        for(let c of word){
            if (node[c] === void 0) {
                node[c] = {};
            }
            node = node[c];
        }
        node[this.END_OF_WORD] = true;
    }

    /**
     * @param {string} word 
     * @return {bollean}
     */
    search(word) {
        let node = this.root;
        for(let c of word){
            if (node[c] === void 0) {
                return false;
            }
            node = node[c];
        }
        return node[this.END_OF_WORD] != undefined;
    }
    
    /**
     * 
     * @param {string} word
     * @return {bollean} 
     */
    startsWith(word) {
        let node = this.root;
        for(let c of word){
            if (node[c] === void 0) {
                return false;
            }
            node = node[c];
        }
        return true;
    }
}

function generateTrieTree() {
    return new Trie()
}

tree = new Trie()
tree.insert('hello')
console.log(tree.search('hello'))

console.log('module.exports === exports?', module.exports === exports)
console.log(module.exports)
// module.exports = generateTrieTree
exports.treeInit = generateTrieTree
console.log(module.exports)
console.log('module.exports === exports?', module.exports === exports)
console.log('eeee')