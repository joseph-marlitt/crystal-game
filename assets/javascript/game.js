//basic alert 
var targetNumber= 12 + Math.floor(Math.random() * 30);
var counter = 0;
var counterOptions = [1, 2, 3,];
var bananaIncrement = [];
var orangeIncrement = [];
var blueberryIncrement = []

function startgame (){

function gen4Numbers() {
    var counterOptions = [];
    while (counterOptions.length < 4) {
        var newNr = (parseInt(Math.random() * 4))+1;
        if (counterOptions.indexOf(newNr) == -1) {
            counterOptions.push(newNr);
        }
    console.log(counterOptions);
	}
    
  bananaIncrement = counterOptions.indexOf[0];
blueberryIncrement = counterOptions.indexOf[1]
orangeIncrement = counterOptions.indexOf[2]
}

// var rand = counterOptions[Math.floor(Math.random() * counterOptions.length)];

// var randomArray = [rand, rand, rand];
// console.log(randomArray);





$("#orange").on("click", function() {

	counter += orangeIncrement;
	alert("Your new score is " + counter);
	console.log("added " + orangeIncrement);
	console.log("Total is" + counter);

	if (counter === targetNumber) {
		alert("You win!");
	}

	else if (counter >= targetNumber) {
		alert("You lose!");
	}

});

$("#blueberry").on("click", function() {

	counter += blueberryIncrement;
	alert("Your new score is " + counter);
	console.log("added " + blueberryIncrement);
	console.log("Total is" + counter);

	if (counter === targetNumber) {
		alert("You win!");
	}

	else if (counter >= targetNumber) {
		alert("You lose!");
	}

});

$("#number-to-guess").text("The number to guess is: " + targetNumber);


$("#banana").on("click", function() {

	counter += bananaIncrement;
	alert("Your new score is " + counter);
	console.log("added " + bananaIncrement);
	console.log("Total is" + counter);

	if (counter === targetNumber) {
		alert("You win!");
	}

	else if (counter >= targetNumber) {
		alert("You lose!");
	}

});
}