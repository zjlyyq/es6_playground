var person = {
    _firstName: "Zhang",
    _lastName: "San"
}

person.__defineGetter__("name", function() {
    return this._firstName + ' ' + this._lastName;
})
person.__defineSetter__("name", function(lastName) {
    this._lastName = lastName;
    console.log('Congratulations!!!');
})

console.log(person.name);
person.name = 'Jialu';
console.log(person.name);