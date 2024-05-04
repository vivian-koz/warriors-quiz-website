function quizQstn(questionNumber) {
    document.title = "Question " + questionNumber;
    let card = document.createElement("div");
    card.classList.add("card");
    let title = document.createElement("h2");
    title.classList.add("title");
    title.value = "Question " + questionNumber;
    card.append(title);
    document.body.appendChild(card);
}