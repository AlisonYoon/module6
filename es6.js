var name = "Sam"

console.log('Before')
console.log(burger) // Uncaught ReferenceError: Cannot access 'burger' before initialization

let burger = 'burger'

if(name === "Sam") {
    let age = 33
}
console.log('After')
console.log(age) // Uncaught ReferenceError: age is not defined

// Basic constant
// ES5

var pi = 3.142

function areaFromRadius(radius) {
    return pi * (radius * radius)
}
dumbFunction()
console.log(areaFromRadius(5))

function dumbFunction() {
    pi = 1
}

// ES6

const otherPi = 3.142

otherPi = 1 // Uncaught TypeError: Assignment to constant variable.

// Complex const
// ES6

const pets = ['Blob', 'Mario', 'Grondle']
console.log(pets)
pets[0] = 'Bolb' // Fine

pets = ['Blob', 'Luigi', 'Sheeply'] // Uncaught TypeError: Assignment to constant variable.

console.log(pets)

const person = {
    name: 'Sam',
    age: 33
}
console.log(person)

person.age = 34 // Fine
console.log(person)