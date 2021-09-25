// display current 'Day of week', 
var currentDay = moment().format('dddd, MMMM Do');
$('#currentDay').text(currentDay);

// define row's time in 24hour format
var currentHour = parseInt(moment().format('H'));
console.log(currentHour);
var textValue = '';
var taskId = '';

// get <textarea> ID's
$(document).ready(function() {
    $('textarea').each(function() {
        var taskEl = parseInt($(this).attr('id'));
        console.log(typeof taskEl);
        if (taskEl < currentHour) {
            $(this).addClass('past');
        }
        else if (taskEl === currentHour) {
            $(this).addClass('present');
        }
        else {
            $(this).addClass('future');
        }
        // looping through Id's to get local storage
        // get values and insert them into textarea
        var storageLocal = JSON.parse(localStorage.getItem(String(taskEl))) || '';
        $(this).append(storageLocal);
    });
});

// compare 'currentHour' to each block ID
// for loop to loop through each block ID
// if time is in past give style of 'past'
// else if time is in future give style of 'future'
// else time is present give style of 'present'

// get value of text area when changed
$('textarea').on('change', function() {
    textValue = $(this).val(); 
    console.log(textValue);
    taskId = $(this).attr('id');
    console.log(taskId);
})

// add event listener for save button
$('.saveBtn').on('click', function() {
    // send to local storage
    localStorage.setItem(taskId, JSON.stringify(textValue));
});
