var highScoresList = document.querySelector("#high-scores-list");
var highScoresContainer = document.querySelector("#high-scores");
var goBack = document.getElementById("goback");

goBack.addEventListener("click", goBackToHome);

function goBackToHome() {
  window.location.assign("index.html");
}

var loadHighScore = function() {
  var savedHighScores = localStorage.getitem("highScores");
    // if (!highScores) {
    //   return false;
    // }
    // savedHighScores = JSON.parse(savedHighScores);

    //highScores = JSON.parse(highScores);
  console.log(savedHighScores);
      for (var i = 0; i < highScores.length; i++) {
        //const score = savedHighScores[i];
        var scoreItemEl = document.createElement("li");
        console.log(scoreItemEl);
        var scoreItem = document.createElement("div");
        //score.setAttribute("class", "");
        scoreItem.textContent = highScores[i];
        scoreItemEl.appendChild(scoreItem);
  
      }
  
  // var createHighScoreEl = function(savedHighScores) {
  //   const score = document.createElement("li");
  // }
};

loadHighScore();


// function questionFunc() {
//   var currentQuestion = questions[currentQuestionIndex];
//   questionEl.textContent = currentQuestion.title;
//   optionsEl.innerHTML = "";
//   for (var i = 0; i < currentQuestion.choices.length; i++) {
//     const answer = currentQuestion.choices[i];
//     const option = document.createElement("button");
//     option.setAttribute("class", "btn");
//     option.textContent = i + 1 + ". " + currentQuestion.choices[i];
//     option.addEventListener("click", function () {
//       selectAnswer(answer);
//     })
//     optionsEl.appendChild(option);
//   }
// }

// var createHighScoreEl = function(savedHighScores) {
//   const score = document.createElement("li");
  

// }