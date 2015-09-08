var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#leap_year").submit(funtion(event) {
    var year = parseInt($("input#year").cal());
    var result = leapYear(year);

    $(".year").text(year);
    if (!result) {
      $(".not").text ("not");
    }

    $("#result").show();
    event.preventDefault();
  });
});
