var people = [
    {
        name: "Sam",
        age: 33,
        favouriteColour: "Green"
    },
    {
        name: "Charlie",
        age: 30,
        favouriteColour: "Red"
    },
    {
        name: "Margaret",
        age: 21,
        favouriteColour: "Yellow"
    },
    {
        name: "Mike",
        age: 26,
        favouriteColour: "Blue"
    }
]



var template = document.getElementById("template").innerHTML

var compiledTemplate = Handlebars.compile(template)

var rendered = compiledTemplate({name: "Sam", age: 33, favouriteColour: "I don't care"})
document.getElementById("target").innerHTML += rendered