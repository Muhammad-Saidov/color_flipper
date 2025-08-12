

const body = document.getElementsByTagName("body")[0];

function setColor(name) {
    body.style.backgroundColor = name;
}

function randomColor() {
    const blue = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const yellow = Math.round(Math.random() * 255);
    const purple = Math.round(Math.random() * 255);

    const color = `rgb(${green}, ${blue}, ${yellow}, ${purple})`;
    body.style.backgroundColor = color;
}   
randomColor();