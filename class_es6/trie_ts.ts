class Trie_ts {
    nextLevel: Trie_ts[] = [];
    isEnd: Number = 0;
    constructor () {
        this.nextLevel = [];
        this.isEnd = 0;
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


