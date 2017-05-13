$(document).ready(function() {

// Global Variables

var correct = 0;
var incorrect = 0;
var incomplete = 0;
var seconds = 100;
var timer;

// Functions
$("#submit-button").click(finish);

function start(){
	intervalId = setInterval(timedecrease, 1000);
}

function timedecrease(){
	seconds--;
	$("#timer").html("<h1>Time Left: " + seconds + "</h1>" );
		if (seconds === 0){

        	finish();
	}
}


function finish() {
	clearInterval(intervalId);
	var answers = $("input[type='checkbox']").filter(":checked");
	for (i = 0; i < answers.length; i++){
		
		if ($(answers[i]).hasClass("correct")){
	 		correct++;
	 	}

	 	if ($(answers[i]).hasClass("incorrect")){
	 		incorrect++;
		}


	$("#questions").html("Correct: " + correct + "<br>");
	$("#questions").append("Incorrect: " + incorrect + "<br>");
	
	}
}

// Main Process

start();

});