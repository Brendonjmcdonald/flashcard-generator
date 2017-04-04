
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
	this.deletion = function(){
		// contains or returns only the cloze-deleted portion of the text.
		console.log(this.cloze);
		
	};

	this.partial = function(){
		// contains or returns only the partial text.

	};

	this.full = function(){
		// contains or returns only the full text.
		console.log(this.text);
	};

	this.error = function(){
		// throw or log an error when the cloze deletion 
		// does not appear in the input text.
		console.log("Error, something is wrong");
	};
}

var question1 = new BasicCard ("What is Han Solo's response when Princess Lea tells him she loves him?", "I know");
var question2 = new BasicCard ("What was Luke's uncle's name on Tatooine?", "Owen");
var question3 = new BasicCard ("Which of Luke's hands is cut off by Darth Vader?", "Right");
var question4 = new BasicCard ("Who directed 'The Empire Strikes Back?'", "Irvin Kershner");
var question5 = new BasicCard ("Who shot first?", "Han");

// console.log(question1.front);
// console.log(question1.back);

var question1Cloze = new ClozeCard ("When Princess Lea tells Han Solo she loves him, Han Solo responds with, 'I know.'", "I know");
var question2Cloze = new ClozeCard ("Owen, was Luke's uncle on Tatooine.", "Owen");
var question3Cloze = new ClozeCard ("Luke's right hand is cut off by Darth Vader.", "right");
var question4Cloze = new ClozeCard ("Irvin Kershner directed 'The Empire Strikes Back.'", "Irvin Kershner");
var question5Cloze = new ClozeCard ("Han shot first.", "first");

// console.log(question1Cloze.text);
// console.log(question1Cloze.cloze);
// question1Cloze.deletion();


var basicCards = [question1, question2, question3, question4, question5];
// console.log(basicCards);

var clozeCards = [question1Cloze, question2Cloze, question3Cloze, question4Cloze, question5Cloze];
// console.log(clozeCards);

var score = 0;

function startGame(){

inquirer.prompt([
	{
		type: "list",
		message: "Would you like to play with Basic cards or Cloze cards?",
		choices: ["Basic", "Cloze"],
		name: "cardType"
		
	}


	]).then(function(game) {

	console.log(game.cardType);

	if(game.cardType === "Basic"){
		basicGame();
	}else if(game.cardType === "Cloze"){
		clozeGame();
		console.log(clozeCards);
	};
})
}
		
function basicGame(){
	for (var i = 0; i < basicCards.length; i++) {
		// 	// console.log(basicCards[i].front);

			inquirer.prompt([
		{
			type: "recursive",
			name: "question",
			message: basicCards[i].front
		}

			]).then(function(answer){
				if (answer.question === basicCards[i].back){
					console.log("Correct!");
					score ++;
					console.log("The score is " + score);
				}else {
					console.log("Incorrect! The correct answer is " + basicCards[0].back)
				}

			})
			
		};

		
		

	


};


startGame();




