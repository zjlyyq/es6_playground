var person = {
    _firstName: "Zhang",
    _lastName: "San"
}

Object.defineProperty(person, 'name', {

    get: function() {
        return this._firstName + ' ' + this._lastName;
    },

    set: function(lastName) {
        this._lastName = lastName;
        console.log('Congratulations!!!');
    }
})

// Object.defineProperty(person, 'name', {
//     configurable: true
// })


console.log(person.name);
person.name = 'Jialu';
console.log(person.name);

// let descriptor = Object.getOwnPropertyDescriptor(person, 'name');
// console.log(descriptor);

Object.keys(person, function(key) {
    console.log(key)
    let descriptor = Object.getOwnPropertyDescriptor(person, key);
    console.log(descriptor);
})