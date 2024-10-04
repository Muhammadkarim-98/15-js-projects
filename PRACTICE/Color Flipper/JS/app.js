const btn = document.querySelector(".color-btn");
const color = document.querySelector(".clr");
const simpleBtn = document.querySelector(".simple-btn");
const hexBtn = document.querySelector(".hex-btn");
const body = document.getElementsByTagName("body")[0];

let colors = ["red", "green", "black", "gray", "blue", "yellow", "brown"];


// Clicking the 'Simple' button
// body.style.backgroundColor = color.textContent;
btn.addEventListener("click", function() {
    const randomClr = Math.floor(Math.random() * colors.length);
    const colorName = colors[Math.floor(randomClr)];
    body.style.backgroundColor = color.textContent;
    color.textContent = colorName;
});
