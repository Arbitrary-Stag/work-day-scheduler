// Code is wrapped in a ready check to prevent the JS/jQuery from loading before all the html elements //
$(document).ready(function() {

  var hourArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  var saveBtn = $(".btn")

  // This code uses the array above as a means of comparing the id's to the current time, and then applying the class past, present, or future accordingly //
  hourArray.forEach(function (item) {
    let currentHour = dayjs().hour();
    if (item === currentHour) {
      $(`#hour-${item}`).attr("class", "row time-block present");
    } else if (item > currentHour) {
      $(`#hour-${item}`).attr("class", "row time-block future");
    } else {
      $(`#hour-${item}`).attr("class", "row time-block past");
    }
  });

  // This code adds an event listener to all the save buttons in the document, then saves the id and text content of that div in local storage //
  saveBtn.on("click", function (event) {
    var saved = $(event.target);

    let savedHour = saved.parent().parent().attr("id");
    let savedEvent = saved.parent().parent().children().eq(1).val();

    localStorage.setItem(savedHour, JSON.stringify(savedEvent));
  });

  // This code checks local storage for any saved items then loads the item in the correct text field based on the id //
  hourArray.forEach(function (item) {
    let hour = $(`#hour-${item}`);
    let storedHourEvent = JSON.parse(localStorage.getItem(`hour-${item}`));

    if (!storedHourEvent) {
      hour.children().eq(1).val("");
    } else {
      hour.children().eq(1).val(`${storedHourEvent}`);
    }
  });

  // This code uses dayjs to find the current date and then sets it as the text content of a specified html element //
  const today = dayjs().format('dddd, MMMM D YYYY');
  $('#currentDay').text("Today is: " + today);

});