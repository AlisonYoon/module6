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

people.forEach(function(person) {
    document.getElementById("target").innerHTML += compiledTemplate(person)
})