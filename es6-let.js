var name = "Sam"

console.log('Before')
console.log(burger) // Uncaught ReferenceError: Cannot access 'burger' before initialization

let burger = 'burger'

if(name === "Sam") {
    let age = 33
}
console.log('After')
console.log(age) // Uncaught ReferenceError: age is not defined