//basic alert 
var targetNumber= 50;

$("#number-to-guess").text(targetNumber);

var counter = 0;

$(".crystal-image").on("click", function() {

	counter += 10;
	alert("Your new score is " + counter);

	if (counter === targetNumber) {
		alert("You win!")
	}

});