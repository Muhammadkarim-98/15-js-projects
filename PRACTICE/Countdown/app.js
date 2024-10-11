const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const giveAwayText = document.querySelector(".giveaway");

let newDate = new Date();
let tempYear = newDate.getFullYear();
let tempMonth = newDate.getMonth();
let tempDay = newDate.getDate();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// GIVEAWAY
const futureDate = new Date(tempYear, tempMonth, tempDay + 30);

const hour = futureDate.getHours();
const minute = futureDate.getMinutes();
const second = futureDate.getSeconds();

giveAwayText.textContent = `Giveaway ends on ${weekdays[futureDate.getDay()]}, ${months[futureDate.getMonth()]} ${futureDate.getFullYear()}, 11:00 PM`;

function runTime() {
    const futureTime = futureDate.getTime();
    const today = new Date().getTime();
    const msTime = futureDate - today;
    // Calculating seconds
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    const day = Math.floor(msTime / oneDay);
    const hourX = Math.floor((msTime % oneDay) / oneHour);
    const minuteX = Math.floor((msTime % oneHour) / oneMinute);
    const secondX = Math.floor((msTime % oneMinute) / 1000);

    days.textContent = day;
    hours.textContent = hourX;
    minutes.textContent = minuteX;
    seconds.textContent = secondX;
}
setInterval(runTime, 1000);
runTime();
