$(".openNav").click(function () {
  $("#nav").animate({ width: "250px" }, 50);
  $("#home-content").animate({ marginLeft: "250px" }, 50);
});

$(".closebtn").click(function () {
  $("#nav").animate({ width: "0px" }, 50);
  $("#home-content").animate({ marginLeft: "0px" }, 50);
});

$("#nav a").click(function () {
  var sectionId = $(this).attr("href");
  var positionOfSection = $(sectionId).offset().top;
  $("html, body").animate({ scrollTop: positionOfSection }, 2000);
});

$(document).ready(function () {
  countDownToTime("10 March 2024 9:56:00");
});

function countDownToTime(countTo) {
  let futureDate = new Date(countTo);
  futureDate = futureDate.getTime() / 1000;

  let now = new Date();
  now = now.getTime() / 1000;

  timeDifference = futureDate - now;

  let days = Math.floor(timeDifference / (24 * 60 * 60));
  let hours = Math.floor((timeDifference - days * 24 * 60 * 60) / 3600);
  let mins = Math.floor(
    (timeDifference - days * 24 * 60 * 60 - hours * 3600) / 60
  );
  let secs = Math.floor(
    timeDifference - days * 24 * 60 * 60 - hours * 3600 - mins * 60
  );

  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${mins} m`);
  $(".seconds").html(`${secs} s`);

  setInterval(function () {
    countDownToTime(countTo);
  }, 1000);
}

var maxLength = 100;

$("textarea").on("input", function () {
  var enteredText = $(this).val();

  if (enteredText.length > maxLength) {
    enteredText = enteredText.slice(0, maxLength);
    $(this).val(enteredText);
  }

  var charsRemaining = maxLength - enteredText.length;
  $("#charCount span").text(charsRemaining).addClass("text-danger");
});

$(document).ready(function () {
  $(".accordion-button").click(function () {
    $(".accordion-button").removeClass("expanded");
    $(this).addClass("expanded");
  });
});
