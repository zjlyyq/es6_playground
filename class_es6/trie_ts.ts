class Trie_ts {
    root = {}
    
    constructor () {
        this.root = {};
    }

    insert(word: string): void {
        for(let c of word){
            console.log(c)
        }
    }

    search(word: string): boolean {
        return true;
    }

    startsWith(prefix: string): boolean {
        return false;
    }
}


