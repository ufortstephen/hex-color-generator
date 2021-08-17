let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let arrows = document.querySelectorAll('.arrow-next')



arrows.forEach(arrow => {
    arrow.onclick = function (e) {
        let hexColor = "#";
        for (let index = 0; index < 6; index++) {
            hexColor += hex[getRandomHexColors()];
        }
        
        let parentDiv = e.target.parentElement.parentElement;
        parentDiv.style.backgroundColor = hexColor;
        let colorDetail = e.target.previousSibling.previousElementSibling.children[0];
        colorDetail.textContent = hexColor;

    }

});

function getRandomHexColors() {
    return Math.floor(Math.random() * hex.length)
}
