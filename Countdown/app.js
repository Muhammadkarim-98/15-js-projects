const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline ");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()

// let futureDate = new Date(2023, 3, 30, 6, 40, 0);
let futureDate = new Date(tempYear, tempMonth, tempDay + 30, 10, 00, 0)
console.log(futureDate)
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${month} ${year} ${hours}:${minutes}`;

// Future number in ms
const futureTime = futureDate.getTime(); // 1680715351070

function getRemainingTime() {
    const today = new Date().getTime();
    const msTime = futureTime - today;
    // Values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // Calculating all values
    const days = Math.floor(msTime / oneDay);
    const hours = Math.floor((msTime % oneDay) / oneHour);
    const minutes = Math.floor((msTime % oneHour) / oneMinute);
    const seconds = Math.floor((msTime % oneMinute) / 1000);

    // set values array:
    const values = [days, hours, minutes, seconds];

    function format(item) {
        if (item < 10) {
            return (item = `0${item}`);
        }
        return item;
    }

    items.forEach(function(item, index) {
        item.innerHTML = format(values[index]);
    });

    if (msTime < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class='expired'>sorry, this giveaway has expired!</h4>`
    }
};

// Countdown
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime();
