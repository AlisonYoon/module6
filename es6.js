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

let otherPi = 1 // Uncaught TypeError: Assignment to constant variable.


// Complex const
// ES6

const pets = ['Blob', 'Mario', 'Grondle']
console.log(pets)
pets[0] = 'Bolb' // Fine

let pets = ['Blob', 'Luigi', 'Sheeply'] // Uncaught TypeError: Assignment to constant variable.

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


//default value for parameter
let doThing = (number = 5) => {
    let result = number + 5
    return result
}


//Objects and classes

// ES6 - rad

class Person {
    constructor(name, age, car) {
        this.name = name
        this.age = age
        this.car = car
    }
    introduce = () => {
        console.log(`Hi, my name is ${this.name}`)
    }
}

let sam = new Person("Sam", 33, false)

console.log(sam)

sam.introduce()

let mike = new Person("Mike", 19, true)

console.log(mike)

mike.introduce()


//module
export var port = 3000
export function getAccounts(url) {
    //something
}
//or
module.exports = {
    port: 3000,
    getAccounts: function() {
    //something
    }
}

import {port, getAccounts} from 'module'
console.log(port) // 3000

//or
import * as service from 'module'
console.log(service.port) // 3000


//Exporter/Importer 2 - Default imports
// add type="module" to the script tag that has src="script.js"

//in exporter.js
export default function addSix(number) {  //only one default per file
    return number + 6
}
//in script.js file
import addSix from "./exporter.js"

console.log(addSix(5))


//Fetch GET
// ES5
var http = new XMLHttpRequest()

var url = 'https://jsonplaceholder.typicode.com/users'

http.open("GET", url, true)

http.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(this.responseText))
    }
}

http.send()

// ES6

let secondUrl = 'https://jsonplaceholder.typicode.com/users'
fetch(secondUrl)
    .then(response => response.json())   //response.json() is the alternative of JSON.parse()
    .then(data => console.log(data))


//Fetch POST
// ES6 POST
let dataToPost = {
    title: 'How to make awesome sausages',
    body: 'Just buy them, it\'s way easier',
    userId: 5
}

let dataJson = JSON.stringify(dataToPost)

fetch(url, {
    method: "POST",
    body: dataJson,
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then(response => response.json())
    .then(json => console.log(json))


//Promises
let thing = new Promise(function(resolve, reject) {
    // do stuff
    if(stuffWentWell) {
        resolve('yippeee')
    } else {
        // stuff went badly
        reject('dkfjghdkjfgh')
    }
})

thing()
    .then(message => console.log(message))
    .catch(message => console.log(message))


//async await
function scaryClown() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('clown');
        }, 2000);
    });
}

async function msg() {
    const msg = await scaryClown();
    console.log('Message:', msg);
}

msg()
console.log('oooooooo')
//result in console :
// oooooooo
// Message: clown


//API is like a communication between different codes.