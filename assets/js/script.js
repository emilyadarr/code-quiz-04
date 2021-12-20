var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var optionsEl = document.getElementById("options");
var answerEl = document.getElementById("answer");
var startBtn = document.getElementById("start-btn");

var question1 = "Commonly used data types DO NOT include:"

function startQuiz() {
  timer();
};

function timer() {
  var timeLeft = 70;

  var timeInterval = setInterval(function() {
    if (timeLeft < 0) {
      clearInterval(timeInterval);
      timerEl.textContent = "0";
    }
    else {
      timerEl.textContent = "Time: " + [timeLeft]
      timeLeft--;
    }
  },1000);
}

startBtn.addEventListener("click", startQuiz);


// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score