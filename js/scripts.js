// Back End
var romanNumeralOutput = [""];
romanNumeralOutput.join("");

function inputRomanize(number); {
  for (var i = number; i !=0, i += 0); {
    if (i >= 1000){
      romanNumeralOutput.push("M");
      
    };
  };
};
log.console(inputRomanize(1000))


//Front End
$(document).ready(function() {
  console.log("Js is functional");

  //on click function
  $("form").submit(function(event) {
    event.preventDefault();

    //Roman Numeral ui
    
    $("#output").text();

  });
});
