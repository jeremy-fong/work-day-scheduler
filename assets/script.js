var currentTime = moment();
let now = moment().hour();


displayCurrentDate(currentTime);

// display current date
function displayCurrentDate() {
    document.getElementById('currentDay').textContent = currentTime.format('dddd, MMMM Do YYYY');
}

$('.time-block').each(function(){
    var tbHour = parseInt($(this).attr('id'));
    if (now > tbHour){
        $(this).addClass('past')
    } else if (now < tbHour){
        $(this).addClass('future')
    } else if (now === tbHour){
        $(this).addClass('present')
    }
});

