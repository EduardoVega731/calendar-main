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
    console.log(currentMonthDays);
    console.log(year);
    console.log(day);

    currentMonth = document.getElementById("month");
    currentMonth.innerHTML = monthNames[month];

    currentYear = document.getElementById("year");
    currentYear.innerHTML = year;

    currentDay = document.getElementsByClassName("currentDay");
    currentDay.innerHTML = day;
}

function display(){
    prompt("Add task")
}


this.document.onload = setMonthYear();
