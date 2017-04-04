
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
		// ClozeCard should have a property or method that contains or returns only the cloze-deleted portion of the text.
		return = cloze;
	};

	this.partial = function(){
		// ClozeCard should have a property or method that contains or returns only the partial text.
	};

	
}




// ClozeCard should have a property or method that contains or returns only the full text.

// ClozeCard should throw or log an error when the cloze deletion does not appear in the input text.

// Use prototypes to attach these methods, wherever possible.

// As your application will not have a front end, your only need to determine an efficient way to store cloze-deleted cards—you don't have to solve the problem of displaying them. You are free to decide how you'd like to implement this. One might represent the above flashcard thus:

// The bulk of this assignment is implementing ClozeCard. If you build a robust ClozeCard implementation, feel free to try your hand at implementing a front-end, as well.