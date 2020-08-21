//Global Variables
//This is where you will define the variables you will be using in your project.

var questionCount = 0;

var introvertScore = 0;
var ambivertScore = 0;
var omnivertScore = 0;
var extrovertScore = 0;

//The following uses DOM to create variables in java script.
var result = document.getElementById("result");
var restart = document.getElementById("retake");

//variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

//variables for the second quiz question.
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

// variables for the third quiz question.
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

//variables for the fourth quiz question.
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", introvert);
q1a2.addEventListener("click", ambivert);
q1a3.addEventListener("click", omnivert);
q1a4.addEventListener("click", extrovert);

q2a1.addEventListener("click", ambivert);
q2a2.addEventListener("click", omnivert);
q2a3.addEventListener("click", extrovert);
q2a4.addEventListener("click", introvert);

q3a1.addEventListener("click", ambivert);
q3a2.addEventListener("click", omnivert);
q3a3.addEventListener("click", extrovert);
q3a4.addEventListener("click", introvert);

//extension #1
q4a1.addEventListener("click", ambivert);
q4a2.addEventListener("click", extrovert);
q4a3.addEventListener("click", omnivert);
q4a4.addEventListener("click", introvert);

restart.addEventListener("click", restartQuiz);

//#TODO: Define quiz functions here
function introvert() {
  introvertScore += 1;
  questionCount += 1;
  //alert("yoohoo introvert");
  if (questionCount >= 4) {
    updateResult();
  }
}

function ambivert() {
  ambivertScore += 1;
  questionCount += 1;
  //alert("yoohoo ambivert");
  if (questionCount >= 4) {
    updateResult();
  }
}

function omnivert() {
  omnivertScore += 1;
  questionCount += 1;
  //alert("yoohoo omnivert");
  if (questionCount >= 4) {
    updateResult();
  }
}

function extrovert() {
  extrovert += 1;
  questionCount += 1;
  //alert("yoohoo extrovert");
  if (questionCount >= 4) {
    updateResult();
  }
}

function updateResult() {
  if (introvertScore >= 3) {
    result.innnerHTML =
      "You're an introvert! You enjoy the chill and quiet side of things.";
  } else if (ambivertScore >= 3) {
    result.innerHTML =
      "You're an ambivert! Your overall behavior is a mixture of an introvert and an extrovert.";
  } else if (omnivertScore >= 3) {
    result.innerHTML =
      "You're an omnivert!You respond to specific situations either as an introvert or an extrovert.";
  } else if (extrovertScore >= 3) {
    result.innerHTML =
      "You're an extrovert!You're the life of the partyan have very little fear.";
  } else {
    result.innerHTML =
      "You're a combination of personality types... take the quiz again to find out which one suits you!";
  }
}

//extension #2 gives the ability to restart the quiz without refreshing the page
function restartQuiz() {
  result.innerHTML = "You're result is...";
  introvertScore = 0;
  ambivertScore = 0;
  omnivertScore = 0;
  extrovertScore = 0;
  questionCount = 0;
}
