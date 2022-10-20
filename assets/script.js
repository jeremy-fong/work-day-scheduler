var currentTime = moment();
let now = moment().hour();


displayCurrentDate(currentTime);

// display current date
function displayCurrentDate() {
    document.getElementById('currentDay').textContent = currentTime.format('dddd, MMMM Do YYYY');
}


