// 例一
let { sin, cos } = Math;

// 例二
const { log } = console;
log('hello') // hello

let { foo: baz } = { foo: 'aaa' }
console.log(baz);

let obj = {
    p: [
      'Hello',
      { y: 'World' }
    ]
  };
  
// let { p: [x, { y }]} = obj;
// console.log(x);

let { p } = obj;
console.log(p);

