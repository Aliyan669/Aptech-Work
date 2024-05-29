var image = document.getElementById('img');
var images = document.getElementById('imgs');
var text = document.getElementById('color');

function Mousein() {
    image.src = "img2.jpeg"
}
function Mouseout() {
    image.src = "img1.jpeg"
}


function Hide() {
    images.style.visibility = "hidden"
}
function Show() {
    images.style.visibility = "visible"
}


function Red() {
    text.style.color = "red"
}
function Blue() {
    text.style.color = "blue"
}
function Green() {
    text.style.color = "green"
}
function Yellow() {
    text.style.color = "rgb(237, 237, 5)"
}