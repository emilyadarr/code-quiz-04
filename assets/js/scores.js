var highScoresContainer = document.querySelector("#high-scores");
var goBack = document.getElementById("goback");
var clearScores = document.getElementById("clearscores");

// go back button to return to index.html
function goBackToHome() {
  window.location.assign("index.html");
}
// clear scores button to clear local storage
function clearScoresFunc() {
  localStorage.clear("highScores")
  window.location.reload();
};

// load high scores onto page
var loadHighScore = function() {
  var savedHighScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
  
  // sort high scores by score property in decending order
  savedHighScores.sort(function (a,b) {
    return b.score - a.score;
  });
      
  for (var i = 0; i < savedHighScores.length; i++) {
    var scoreItem = document.createElement("div");
    scoreItem.innerText= i + 1 + ". " + savedHighScores[i].name + " - " + savedHighScores[i].score;
    scoreItem.setAttribute("class", "score-item");
    highScoresContainer.appendChild(scoreItem);
    
  }
};

loadHighScore();

goBack.addEventListener("click", goBackToHome);

clearScores.addEventListener("click", clearScoresFunc);