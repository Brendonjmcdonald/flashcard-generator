// Require inquirer for the CLI
var inquirer = require("inquirer");


// Create a BasicCard constructor. It should accept front and back arguments.
var BasicCard = function(front, back){
	this.front = front;
	this.back = back;
};

// Create a ClozeCard constructor. It should accept text and cloze arguments.
var ClozeCard = function(text, cloze){
	this.text = text;
	this.cloze = cloze;

// This replaces the cloze with "..." and sets it as "partial"
	this.partial = text.replace(cloze, "...");
	
	this.error = function(){
		// throw or log an error when the cloze deletion 
		// does not appear in the input text.
		console.log("Error, something is wrong");
	};
}
// Basic cards
var question1 = new BasicCard ("What is Han Solo's response when Princess Lea tells him she loves him?", "I know");
var question2 = new BasicCard ("What was Luke's uncle's name on Tatooine?", "Owen");
var question3 = new BasicCard ("Which of Luke's hands is cut off by Darth Vader?", "Right");
var question4 = new BasicCard ("Who directed 'The Empire Strikes Back?'", "Irvin Kershner");
var question5 = new BasicCard ("Who shot first?", "Han");

// Cloze cards
var question1Cloze = new ClozeCard ("When Princess Lea tells Han Solo she loves him, Han Solo responds with, 'I know.'", "I know");
var question2Cloze = new ClozeCard ("Owen, was Luke's uncle on Tatooine.", "Owen");
var question3Cloze = new ClozeCard ("Luke's right hand is cut off by Darth Vader.", "right");
var question4Cloze = new ClozeCard ("Irvin Kershner directed 'The Empire Strikes Back.'", "Irvin Kershner");
var question5Cloze = new ClozeCard ("Han shot first.", "first");

// Store the basic cards in an array
var basicCards = [question1, question2, question3, question4, question5];

// Store the cloze cards in an array
var clozeCards = [question1Cloze, question2Cloze, question3Cloze, question4Cloze, question5Cloze];

// Create a score counter
var score = 0;

// Create a question number, this is mainly because I had trouble looping through the arrays and getting
// inquirer to display one card at a time and then move on to the next card. This number just acts as the
// index number in the array
var questionNumber = 0;

// The function that starts the game
function startGame(){
	// resets the score at zero
	score = 0;

	// resets the index to zero
	questionNumber = 0;

	// Prompt to ask the user whether they want to play with basic or cloze cards
	inquirer.prompt([
	{
		type: "list",
		message: "Would you like to play with Basic cards or Cloze cards?",
		choices: ["Basic", "Cloze"],
		name: "cardType"
		
	}

	]).then(function(game) {

	console.log(game.cardType + " game!");
	console.log("---------------------------------------------------");

		// Starts the appropriate function based on the users selection
		if(game.cardType === "Basic"){
			basicGame();

		}else if(game.cardType === "Cloze"){
			clozeGame();
		};
	})
}

// Function to ask the user if they would like to play again
function playAgain(){
	inquirer.prompt([
	{
		type: "confirm",
		message: "Would you like to play again?",
		name: "again"
	}
	]).then(function(yes){
		
		if(yes.again){
			console.log("---------------------------------------------------");
			startGame();

		}else {
			console.log("---------------------------------------------------");
			console.log("Welp, see you later!")
		}
	})
}

// Function for if the user selects the basic card set
function basicGame(){

// Prompt for the question to be asked, the questionNumber counter is put where the index 
// number usually appears
	inquirer.prompt([
	{
		name: "question",
		message: basicCards[questionNumber].front + "\nAnswer: "
	}
	]).then(function(answer){
		// If the input is the same as the back of the card it is correct and the score goes up
		// This also accounts for the capitalization of strings
		if (answer.question.toLowerCase() === basicCards[questionNumber].back.toLowerCase()){
			console.log("Correct!");
			score ++;
			console.log("---------------------------------------------------");
				
		// If the answer is wrong the correct answer will be displayed	
		}else {
			console.log("Incorrect! The correct answer is:  " + basicCards[questionNumber].back)
			console.log("---------------------------------------------------");
		}

		// If the question number counter is less than the amount of questions then the counter
		// goes up, which changes the question by changing the index in the array, and then the 
		// function is recursive
		if (questionNumber < basicCards.length - 1){
			questionNumber ++;
			basicGame();

		// After all the questions have been prompted the game is over and the playAgain
		// function is called, asking the user if they would like to play again.
		}else{
			console.log("Game over!");
			console.log("Score: " + score);
			playAgain();
		}
		})
};

// Function for is the user selects the cloze card set
function clozeGame(){

// The user is prompted with the partial text
	inquirer.prompt([
	{
		name: "question",
		message: clozeCards[questionNumber].partial + "\nAnswer: "
	}

	]).then(function(answer){
		// If the user answer is the same as the cloze then the score is raised and the full text is shown
		if (answer.question.toLowerCase() === clozeCards[questionNumber].cloze.toLowerCase()){
			console.log("Correct!");
			console.log(clozeCards[questionNumber].text);
			score ++;
			console.log("---------------------------------------------------");
		// If not then the user is shown the cloze and the full text	
		}else {
			console.log("Incorrect! The correct answer is:  " + clozeCards[questionNumber].cloze)
			console.log(clozeCards[questionNumber].text);
			console.log("---------------------------------------------------");
		}
		// If the questionNumber is less than the amount of questions it moves on to the next question
		if (questionNumber < clozeCards.length - 1){
			questionNumber ++;
			clozeGame();

		// If there are no more question it prompts the user if they would like to play again
		}else{
			console.log("Game over!");
			console.log("Score: " + score);
			playAgain();

		}

			})

};

// Starting the game
startGame();

