//Establish Open/Closed Variable
var currentStatus = "Pre-Order Closed";
//Establish Day of Week
var date = new Date();

function getWeekDay(date) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return days[date.getDay()]
}
var day = date.getDate()
var weekdate = (getWeekDay(date))
var year = date.getFullYear()
var seconds = date.getSeconds();
var minutes = date.getMinutes();
var hours = date.getHours() + 8;  // set your offset from Greenwich Mean Time here, Arizona is 7 hours

//variables for business
var days = {
    "Sunday": {
        "openTime": 0,
        "closeTime": 0
    },
    "Monday": {
        "openTime": 9,
        "closeTime": 17
    },
    "Tuesday": {
        "openTime": 9,
        "closeTime": 17
    },
    "Wednesday": {
        "openTime": 9,
        "closeTime": 17
    },
    "Thursday": {
        "openTime": 9,
        "closeTime": 17
    },
    "Friday": {
        "openTime": 9,
        "closeTime": 17
    },
    "Saturday": {
        "openTime": 0,
        "closeTime": 0
    }
}
var theDay = days[weekdate];
var theTime = date.getHours();

//function statement
if (hours >= theDay.openTime && hours < theDay.closeTime) {
    currentStatus = "Open for Pre-Order!"
}
console.log("The business is currently " + currentStatus);
document.getElementById("demo").innerHTML = currentStatus ;