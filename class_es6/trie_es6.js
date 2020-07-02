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

tree = new Trie()
tree.insert('hello')
tree.search('hello')
tree.startsWith('hel')