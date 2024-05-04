function quizQstn(questionNumber) {
    document.title = "Question " + questionNumber;
    let h2 = document.querySelector("body > h2");
    let p = document.querySelector("body > p");
    let button = document.querySelector("body > button");
    h2.style.display = "none";
    p.style.display = "none";
    button.style.display = "none";
}