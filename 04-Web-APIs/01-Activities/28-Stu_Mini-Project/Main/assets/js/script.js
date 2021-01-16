//javascript code goes here

//define variables 

//start button 
var startButton = document.querySelector(".start-button");
var timeFrame = document.querySelector(".timer-count");
startButton.addEventListener("click", function(){
    setTime()
});
//word bank

var wordBank = ["word", "bank"];

for( i = 0; i<wordBank)

// point system
var wins = 0;
var lose = 0;

// Reset button


var resetButton = document.querySelector("Reset-button")

// timer

var timer = 10

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      timer--;
      timeFrame.innerText = timer; 
      if(timer === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }


function init() {
    console.log("initialize")
}

//add event listener to the start button
//randomize the word that shows up on the screen
//