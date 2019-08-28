document.querySelector('.no-js').classList.remove('no-js')

//no-js class has {display: none}, so if JS runs correctly, it will remove that class and everything will show just fine.
//no-js class is assigned to <html> tag.
//If user's browser turned off JS, then nothing will show.

document.querySelectorAll('div').forEach(function(div) {
    div.classList.toggle('no-js')
})
//This is if no-js class is assigned to <div>
//using .toggle() you don't need to assign no-js class to every <div>