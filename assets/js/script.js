var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var optionsEl = document.getElementById("options");
var answerEl = document.getElementById("answer");
var startBtn = document.getElementById("start-btn");
var timeLeft = 70;


var option1 = document.createElement("button");
var option1Answers = ["strings", "quotes"]
var option2 = document.createElement("button");
var option2Answers = ["booleans", "curly brackets"]
var option3 = document.createElement("button");
var option3Answers = ["alerts", "parenthesis"]
var option4 = document.createElement("button");
var option4Answers = ["numbers", "square brackets"]

var questionElQuestions = ["Commonly used data types DO NOT include:", "The condition in an if/else statement is enclosed with _______."];

// var questionObj = {
//   question: ["Commonly used data types DO NOT include:", "The condition in an if/else statement is enclosed with _______."],
//   option1: ["strings", "quotes"],
//   option2: ["booleans", "curly brackets"],
//   option3: ["alerts", "parenthesis"],
//   option4: ["numbers", "square brackets"]
// };

option1.className = "btn";
option2.className = "btn";
option3.className = "btn";
option4.className = "btn";

function startQuiz() {
  timer();
  question1();
};

function question1() {
  // for (var i = 0; i < questionObj.length; i++) {
  //   questionEl.textContent = questionObj.question[i];
  //   optionsEl.textContent = "";
  //   option1.textContent = "1. " + questionObj.option1[i];
  //   option2.textContent = "2. " + questionObj.option2[i];
  //   option3.textContent = "3. " + questionObj.option3[i];
  //   option4.textContent = "4. " + questionObj.option4[i];
  //   optionsEl.appendChild(option1);
  //   optionsEl.appendChild(option2);
  //   optionsEl.appendChild(option3);
  //   optionsEl.appendChild(option4);
  // }

  for (var i = 0; i < questionElQuestions.length; i++) {
    questionEl.textContent = questionElQuestions[i];
    optionsEl.textContent = "";
    option1.textContent = "1. " + option1Answers[i];
    option2.textContent = "2. " + option2Answers[i];
    option3.textContent = "3. " + option3Answers[i];
    option4.textContent = "4. " + option4Answers[i];
    optionsEl.appendChild(option1);
    optionsEl.appendChild(option2);
    optionsEl.appendChild(option3);
    optionsEl.appendChild(option4);

    if (questionElQuestions[0]) {
      option1.addEventListener("click", wrong);
      option2.addEventListener("click", wrong);
      option3.addEventListener("click", correct);
      option4.addEventListener("click", wrong);
    }
  }
};

function correct() {
  answerEl.textContent = "Correct!";
  question1();
}

function wrong() {
  answerEl.textContent = "Wrong!";
  timeLeft = timeLeft -10;
  question1();
}

function timer() {

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