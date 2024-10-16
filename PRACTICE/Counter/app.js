const valueNum = document.getElementById("value");

let countingNum = 0;

function increaseFn() {
    countingNum++;
    if (countingNum > 0) valueNum.style.color = "green";
    valueNum.textContent = countingNum;
}

function resetFn() {
    countingNum = 0;
    if (countingNum === 0) valueNum.style.color = "black";
    valueNum.textContent = countingNum;
}

function decreaseFn() {
    countingNum--;
    if (countingNum < 0) valueNum.style.color = "red";
    valueNum.textContent = countingNum;
}
