let colors = ["green", "blue", "orange", "rgba(22,122, 222)", "#f43f67"]
let button = document.getElementById('btn')
let nav = document.querySelector('nav')
let colorDetail = document.querySelector('.color')
let main = document.querySelector('main')

button.onclick = function () {
    let randomNumber = getRandomNumber()
    main.style.backgroundColor = colors[randomNumber]
    nav.style.backgroundColor = colors[randomNumber]
    colorDetail.textContent = colors[randomNumber]
}

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}