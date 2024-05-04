function quizQstn(questionNumber) {
    // change title
    document.title = "Question " + questionNumber;

    // make question card
    let card = document.createElement("div");
    card.classList.add("card");
    let title = document.createElement("h2");
    title.classList.add("title");
    let question = document.createElement("p");
    title.innerText = "Question " + questionNumber + ":";
    card.append(title);
    card.append(question);
    document.body.appendChild(card);

    //remove welcome text
    removeWelcomeText();
}

function removeWelcomeText() {
    let welcomeCard = document.querySelector("body > div.welcome-card");
    welcomeCard.style.display = "none";
}