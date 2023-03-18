// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function() {

  var hourArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  var saveBtn = document.getElementsByClassName("fa-save");

  const today = dayjs().format('dddd, MMMM D YYYY');
  $('#currentDay').text("Today is: " + today);

  const currentHour = dayjs().hour();

});