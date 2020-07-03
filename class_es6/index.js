const trieInit = require('./trie_es6')

console.log(trieInit.treeInit)

tree = trieInit.treeInit()
tree.insert('hello')
console.log(tree.search('hello'))