function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
        alert(this.name);
    };
    return o;
}

var person1 = createPerson("Nicholas", 29, "Software Engineer");
var person2 = createPerson("Greg", 27, "Doctor");
console.log(person1.constructor);

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        alert(this.name);
    };
}
var person3 = new Person("Nicholas", 29, "Software Engineer");
var person4 = new Person("Greg", 27, "Doctor");
console.log(person3.constructor);
console.log(person3.constructor == Person);
console.log(person3 instanceof Object);
console.log(person3 instanceof Person);
console.log(typeof (person3));