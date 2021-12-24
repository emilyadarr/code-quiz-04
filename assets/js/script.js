var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var optionsEl = document.getElementById("options");
var answerEl = document.getElementById("answer");
var startBtn = document.getElementById("start-btn");
var formEl = document.getElementById("form");
var timeLeft = 0;
var timeInterval;

// array of questions with choices and answers
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

// startQuiz function to run timer and question functions
function startQuiz() {
  timer();
  questionFunc();
};

// questionFunc function - for loop to run through question array
var currentQuestionIndex = 0;

function questionFunc() {
  var currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.title;
  optionsEl.innerHTML = "";
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    const answer = currentQuestion.choices[i];
    const option = document.createElement("button");
    option.setAttribute("class", "btn");
    option.textContent = i + 1 + ". " + currentQuestion.choices[i];
    option.addEventListener("click", function () {
      selectAnswer(answer);
    })
    optionsEl.appendChild(option);
  }
}

// selectAnswer function to check answer
function selectAnswer(answer) {
  if (answer === questions[currentQuestionIndex].answer) {
    answerEl.textContent = "Correct!";
    var correctAudio = new Audio('./assets/sounds/correct.wav');
    correctAudio.play();
  } else {
    answerEl.textContent = "Wrong!";
    var wrongAudio = new Audio("./assets/sounds/incorrect.wav");
    wrongAudio.play();
    timeLeft = timeLeft - 10;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    endQuiz();
  } else {
    questionFunc();
  }
}

//timer function to countdown
function timer() {
  timeLeft = 70;
  timeInterval = setInterval(function() {
    if (timeLeft < 0) {
      clearInterval(timeInterval);
      timerEl.textContent = "0";
      timeLeft = 0;
      endQuiz();
    }
    else {
      timerEl.textContent = "Time: " + [timeLeft]
      timeLeft--;
    }
  },1000);
};

//endQuiz function to run when time runs out or all questions are answered
function endQuiz() {
  clearInterval(timeInterval);
  questionEl.textContent = "All done!";
  optionsEl.textContent = "Your final score is " + [timeLeft] + ".";
  timerEl.textContent = "";

  var formInput = document.createElement ("input");
  formInput.setAttribute("class", "form-text");
  formInput.setAttribute("name", "initials");
  formInput.setAttribute("placeholder", "Enter your initials");

  var formButton = document.createElement ("button");
  formButton.setAttribute("class", "btn");
  formButton.setAttribute("type", "submit");
  formButton.textContent = "Submit"

  formEl.appendChild(formInput);
  formEl.appendChild(formButton);
  
  formButton.addEventListener("click", highScoreHandler);
};

// highScoreHandler function to store high scores to local storage
var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
var highScoreHandler = function(event) {
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

  localStorage.setItem("highScores", JSON.stringify(highScores));

  window.location.href= "highScores.html"
};

// event listener to start quiz when button is clicked
startBtn.addEventListener("click", startQuiz);