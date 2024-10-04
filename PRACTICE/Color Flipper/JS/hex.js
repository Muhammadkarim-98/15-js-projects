const btn = document.querySelector(".color-btn");
const color = document.querySelector(".clr");
const simpleBtn = document.querySelector(".simple-btn");
const hexBtn = document.querySelector(".hex-btn");
const body = document.getElementsByTagName("body")[0];

let colors = ["red", "green", "black", "gray", "blue", "yellow", "brown"];

// Clicking the 'Hex' button
btn.addEventListener("click", function() {
    const digitals = [1, 2, 3, 4, 5, 6, "a", "b", "c", "d", "e", "f"];
    let box = [];
    for (i = 1; i <= 6; i++) {
        const randomNumber = Math.floor(Math.random() * digitals.length);
        box += digitals[randomNumber];
    };
    color.textContent = '#' + box;
    body.style.backgroundColor = '#' + box
});
