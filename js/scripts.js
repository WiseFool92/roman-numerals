// Back End




//Front End
$(document).ready(function() {
  console.log("Js is functional");

  //on click function
  $("form").submit(function(event) {
    event.preventDefault();

    //Roman Numeral ui
    var year = $("#input").val();
    $(".output").text(evaluateYear(year));

  });
});
