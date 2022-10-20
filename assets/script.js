var currentTime = moment();
let now = moment().hour();


displayCurrentDate(currentTime);

// display current date
function displayCurrentDate() {
    document.getElementById('currentDay').textContent = currentTime.format('dddd, MMMM Do YYYY');
};

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

$('.saveBtn').on('click', function(){
    // e.preventDefault();
    var timeId = $(this).parent().attr('id');
    var userInput = $(this).siblings('textarea').val();

    localStorage.setItem(timeId, userInput);
    
});

$('textarea').each(function(){
    var storedEvents = $(this).parent().attr('id');
    var savedEvents = localStorage.getItem(storedEvents);
    if (savedEvents !== null){
        $(this).val(savedEvents);
    }
});

$('#clearBtn').on('click', function(){
    var clearEvent = '  '
    localStorage.clear()
    $('textarea').val(clearEvent);
})