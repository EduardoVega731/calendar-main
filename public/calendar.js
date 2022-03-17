// months array
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November",
    "December"
];

const daysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
    "Friday", "Saturday"
]


// https://www.w3schools.com/js/js_date_methods.asp

const dte = new Date();

const day = dte.getDate();
const month = dte.getMonth();
const year = dte.getFullYear();

//https://www.w3resource.com/javascript-exercises/javascript-date-exercise-9.php
// Finds number of days in current month
var currentMonthDays = new Date(year, month + 1, 0).getDate();

// displays current month and year
function setMonthYear() {
    // console.log(currentMonthDays);
    // console.log(year);
    // console.log(day);

    currentMonth = document.getElementById("month");
    currentMonth.innerHTML = monthNames[`${month}`];

    currentYear = document.getElementById("year");
    currentYear.innerHTML = year;

    currentDay = document.getElementsByClassName("currentDay");
    currentDay.innerHTML = day;
}

function renderCalendar() {
    // finds where the first day of month starts on calendar position
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
    let start = new Date(year, month).getDay(); // for March... 2 / Tuesday
    console.log(start);
}



this.document.onload = setMonthYear();
