const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const giveAwayText = document.querySelector(".giveaway");

let newDate = new Date();
// GIVEAWAY
newDate.setMonth(newDate.getMonth() + 2);
const year = () => {
    if (newDate.getMonth() === 0) {
        newDate.setFullYear(newDate.getFullYear() + 1);
    };
    return newDate.getFullYear();
};
giveAwayText.textContent = `Giveaway ends on Sunday, ${newDate.getMonth()} ${newDate.getFullYear()}, 11:00 PM`;

const newDay = newDate;
console.log(newDay);
