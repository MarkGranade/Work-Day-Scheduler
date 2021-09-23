var tasks = {}

var currentDay = moment().format('dddd, MMMM Do');
$('#currentDay').text(currentDay);

var createTask = function() {

}

// $(document).ready(function() {
//     $('textarea').each(function() {
//         var taskEl = $(this).attr('id');
//         console.log(taskEl);
//     });
// });
// grabs all <textarea> ID's
$('textarea').each(function() {
    var taskEl = $(this).attr('id');
    console.log(taskEl);
});

// console.log(moment().hour())
// console.log($('textarea'));

var auditTask = function(taskEl) {
    var date = $(taskEl)
        .find(taskEl)
        .text()
        .trim();
    console.log(date);

    // convert to moment object at 5:00pm
    var time = moment(date, 'LT');
    console.log(time);

    // remove any old classes from element
    $(taskEl).removeClass('present past future');

    // apply new class if task is near/over due date
    if (moment().isAfter(time)) {
        $(taskEl).addClass('past');
    }
    else if (Math.abs(moment().diff(time, 'days')) <=2) {
        $(taskEl).addClass('present');
    }
};

// var saveTasks = function() {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// };

auditTask();
// saveTasks();