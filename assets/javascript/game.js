$(document).ready(function() {
	//Global Variables
	var counter = 0;
	var targetNumber;
	var wins = 0;
	var losses = 0;
	var banana = 1 + Math.floor(Math.random() * 12);
	var orange = 1 + Math.floor(Math.random() * 12);
	var blueberry = 1 + Math.floor(Math.random() * 12);
	var cherry = 1 + Math.floor(Math.random() * 12);
	$("#number-to-guess").hide(targetNumber);
	//Variables that change on game start
	function startGame(){
		counter = 0;
		targetNumber = 19 + Math.floor(Math.random() * 120);
		$("#number-to-guess").text(targetNumber);
		
		banana = 1 + Math.floor(Math.random() * 12);
		orange = 1 + Math.floor(Math.random() * 12);
		blueberry = 1 + Math.floor(Math.random() * 12);
		cherry = 1 + Math.floor(Math.random() * 12);
		
		//Add Wins/Losses to the page.
	}
		//How we are determining the result of the game.
	$("#start").on("click", function(){
		startGame()
	});

	$("#number-to-guess").show(targetNumber);
		$("#cherry").on("click", function() {
			counter += cherry;
			alert("Your new score is " + counter);
			console.log("added " + cherry);
			console.log("Total is: " + counter);
		});

		$("#orange").on("click", function() {
			counter += orange;
			alert("Your new score is " + counter);
			console.log("added " + orange);
			console.log("Total is: " + counter);	
		});

		$("#blueberry").on("click", function() {
			counter += blueberry;
			alert("Your new score is " + counter);
			console.log("added " + blueberry);
			console.log("Total is: " + counter);	
		});

		$("#banana").on("click", function() {
			counter += banana;
			alert("Your new score is " + counter);
			console.log("added " + banana);
			console.log("Total is: " + counter);	
		});	
		// Decide if win or lose
		$(".fruit-image").on("click", function() {
			if (counter === targetNumber) {
			wins++;
			alert("You win!");
			startGame();
		}
		else if (counter >= targetNumber) {
			losses++;
			alert("You lose!");
			startGame();
		}
	})
});