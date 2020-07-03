var person = {}

Object.defineProperties(person, {
    _firstName: {
        value: "Zhang"
    },
    _lastName: {
        value: "San"
    },
    name: {
        get: function() {
            return this._firstName + ' ' + this._lastName;
        },
        set: function(lastName) {
            this._lastName = lastName;
            console.log('Congratulations!!!');
        }
    }
})

console.log(person.name);
person.name = 'Jialu';
console.log(person.name);