// var title = document.querySelector("head > title");
let startBtn = document.querySelector("body > button");
startBtn.addEventListener("click", quizQstn(1));

function quizQstn(questionNumber) {
    document.title = "Question " + questionNumber;
}