var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var optionsEl = document.getElementById("options");
var answerEl = document.getElementById("answer");
var startBtn = document.getElementById("start-btn");
var initialsEl = document.getElementById("initials");
var submitBtn = document.getElementById("submit");
var formEl = document.getElementById("form");
var timeLeft = 70;

formEl.style.display = "none";



var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if/else statement is enclosed with _______.",
    choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    answer: "parenthesis"
  },
  {
    title: "Arrays in JavaScript can be used to store ______.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
  },
  {
    title: "String values must be enclosed within _____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes"
  },
  {
    title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log"
  }
];

function startQuiz() {
  timer();
  questionFunc();
};

// TODO: REwork area from notes
var currentQuestionIndex = 0;
function questionFunc() {
  var currentQuestion = questions[currentQuestionIndex];
  var option1 = document.createElement("button");
  var option2 = document.createElement("button");
  var option3 = document.createElement("button");
  var option4 = document.createElement("button");
  option1.className = "btn";
  option2.className = "btn";
  option3.className = "btn";
  option4.className = "btn";
  console.log(currentQuestionIndex);
  questionEl.textContent = currentQuestion.title;
  
  optionsEl.innerHTML ="";
  option1.textContent = "1. " + currentQuestion.choices[0];
  option2.textContent = "2. " + currentQuestion.choices[1];
  option3.textContent = "3. " + currentQuestion.choices[2];
  option4.textContent = "4. " + currentQuestion.choices[3];
  optionsEl.appendChild(option1);
  optionsEl.appendChild(option2);
  optionsEl.appendChild(option3);
  optionsEl.appendChild(option4);
  
  if ((currentQuestionIndex === 0) || (currentQuestionIndex === 1) || (currentQuestionIndex === 3)) {
    option1.addEventListener("click", wrong);
    option2.addEventListener("click", wrong);
    option3.addEventListener("click", correct);
    option4.addEventListener("click", wrong);
  }

  if ((currentQuestionIndex === 2) || (currentQuestionIndex === 4)) {
    option1.addEventListener("click", wrong);
    option2.addEventListener("click", wrong);
    option3.addEventListener("click", wrong);
    option4.addEventListener("click", correct);
  }
};

function correct() {
  answerEl.textContent = "Correct!";
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    questionFunc();
  }
  else {
    endQuiz();
  }
};

function wrong() {
  answerEl.textContent = "Wrong!";
  timeLeft = timeLeft -10;
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    questionFunc();
  }
  else {
    endQuiz();
  }
};


function endQuiz() {
  //var finalScore = timeLeft;
  questionEl.textContent = "All done!";
  optionsEl.textContent = "Your final score is " + [timeLeft] + ".";
  timerEl.textContent = "";
  formEl.style.display = "block";
  formEl.addEventListener("click", saveHighScore())
  //return finalScore;
};


function timer() {
  var timeInterval = setInterval(function() {
    if (timeLeft < 0) {
      clearInterval(timeInterval);
      timerEl.textContent = "0";
      timeLeft = 0;
      endQuiz();
    }
    // TODO: Figure out how to clear interval after questions
    // if (endQuiz) {
    //   clearInterval(timeInterval);
    // }
    else {
      timerEl.textContent = "Time: " + [timeLeft]
      timeLeft--;
    }
  },1000);
};

// TODO: LEFT OFF HERE. need to figure out how to save highscores to local storage
// create array to hold high scores for saving
var highScores = [];

var createHighScore = function(event) {
  event.preventDefault();
  var initialsInput = document.querySelector("input[name='initials']").value;
  
  if (!initialsInput) {
    alert("You need to enter your initials!");
    return false;
  };

  var highScoreObj = {
    name: initialsInput,
    score: timeLeft
  };

  highScores.push(highScoreObj);
  console.log(highScores);

  saveHighScore();
};

var saveHighScore = function() {
  localStorage.setItem("highScores", JSON.stringify(highScores));
};

var loadHighScore = function() {
  var savedHighScores = localStorage.getitem("tasks");
    if (!savedHighScores) {
      return false;
    }
    savedHighScores = JSON.parse(savedHighScores);

    for (var i = 0; i < savedHighScores.length; i++) {
      createHighScore(savedHighScores[i]);
    }
};

formEl.addEventListener("submit", createHighScore);

// function saveHighScore() {
//   var initials = initialsEl.value.trim();
//   console.log(initials);

//   var highscores = 
//     JSON.parse(window.localStorage.getItem("highscores"));
//     if (highscores === null) {
//       highscores = 0;
//     }

//     if (timeLeft > highscores) {
//       JSON.stringify(window.localStorage.setItem("highscores", timeLeft))
//       JSON.stringify(window.localStorage.setItem("initials", initials))
//     }
// }

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