var person = {
    name: "Zhang San"
}
Object.defineProperty(person, 'name', {
    writable: false,
    value: 'zjl'
})

person.name = 'yyq';
console.log(person.name);  // zjl

Object.defineProperty(person, 'name', {
    configurable: false
})

delete person.name;
console.log(person.name);  // zjl

Object.defineProperty(person, 'name', {
    writable: true
})