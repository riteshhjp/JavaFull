let user = {
    "First_name" : "Ritesh",
    "Last name" : "Kumar",
    "age" : 25,
    "Occupation" : "Student",
    "Gender" : "Male"

}
console.log(user)

// Object Literal (most common and simple)
const obj1 = { key1: "value1", key2: "value2" };

// Using new Object() constructor
const obj = new Object();
obj.key1 = "value1";

// Using a constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new Person("Bob", 25);

// Using Object.create()
const obj = Object.create(null);
obj.key = "value";