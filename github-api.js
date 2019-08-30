let apiUrl = 'https://api.github.com/search/repositories?q=language:javascript,created:2017-01-01..2017-12-31&sort=stars&order=desc&per_page=3'
var printHere = document.getElementById('most-starred')
var obj;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => obj = data)
    .then(() => console.log(obj))

printHere.innerHTML = obj.id