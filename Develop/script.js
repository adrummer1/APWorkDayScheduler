// Global variables
var TimeBlockEl = document.querySelector('.container-fluid');

$(function () {
//Add current day, date, and time to header
$('#currentDay').text(dayjs().format('dddd, MMM DD, YYYY hh:mm A'));

//Event Listener for saveBtn that stores the text value and time slot to localStorage.
$('.saveBtn').on('click', function() {
  var text = $(this).siblings('.description').val();
  var time = $(this).parent().attr('id');

  localStorage.setItem(time, text);
  console.log(localStorage);
});

// Get item from local storage if there is anything and save to the corresponding hour block.
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));

function trackTask() {
  // Set variable for current hour.
  var currentHour = dayjs().hour();

  // Function for changing background color on time blocks relative to the current time.
  // I was having trouble with this function and AskBCS helped me determine it was as simple as adding a hyphen to the hour on the parse function so that numbers match.
  $('.time-block').each(function () {
    var timeID = parseInt($(this).attr('id').split('hour-')[1]);

    if (timeID < currentHour) {
      $(this).addClass("past");
    }
    else if (timeID === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    }
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });  
}

trackTask();
});