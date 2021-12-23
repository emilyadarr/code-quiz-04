var goBack = document.getElementById("goback")

goBack.addEventListener("click", goBackToHome)

function goBackToHome() {
  window.location.assign("index.html");
}