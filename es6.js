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


//Fat Arrow function

var person = {
    name: "Slim Shady",
    back: true,
    introduce: function () {
        console.log('Hi, my name is')
        console.log('Hi, my name is')
        console.log('Hi, my name is')
        setTimeout(() => {
            console.log(this.name)
        }, 1000)
    }
}

let fatArrow = (numberOne, numberTwo) => {
    return numberOne + numberTwo
}

console.log(fatArrow(3, 7))


//Fat arrow as an anonymous callback

let someStudents = ['Liz', 'Tom', 'Matt']

someStudents.forEach((student) => {
    console.log(student)
})

someStudents.forEach(student => console.log(student))
//if it's just one parameter, you can omit parenthesis
//if it's just one line, you can omit {}

let sausage = 'sausage'
let addBurger = thing => thing + ' burger'   // Auto-returning one-liner. if it's just one line, you can omit "return"
console.log(addBurger(sausage))