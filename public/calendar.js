// months array
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November",
    "December"
];

// https://www.w3schools.com/js/js_date_methods.asp

const dte = new Date();
// document.write("The current month is " + monthNames[d.getMonth()]);

const day = dte.getDate();
const month = dte.getMonth();
const year = dte.getFullYear();

//https://www.w3resource.com/javascript-exercises/javascript-date-exercise-9.php
// Finds number of days in current month
const currentMonthDays = new Date(year, month + 1, 0).getDate();

// displays current month and year
function setMonthYear() {
    currentMonth = document.getElementById("month");
    currentMonth.innerHTML = monthNames[month];

    currentYear = document.getElementById("year");
    currentYear.innerHTML = year;
}


function filterDay() {
    let ul = document.getElementById('days');
    let listItems = ul.getElementsByTagName('li');

    // remove currentDay class from previous days
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].firstElementChild.classList.remove('currentDay');
    }
    // adds currentDay class to li span
    listItems[day-1].firstElementChild.classList.add('currentDay');
}

function load() {
    setMonthYear();
    filterDay();
}

this.document.onload = load();
