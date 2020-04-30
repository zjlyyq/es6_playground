// "use strict"; 

var person = {
	name: "Zhang San"
}
Object.defineProperty(person, 'name', {
    writable: false,
    value: 'zjl',
    configurable: false
})

person.name = 'yyq';
console.log(person.name);
delete person.name;
console.log(person.name);

Object.defineProperty(person, 'name', {
    writable: true,
    // value: 'zjl',
    // configurable: true
})