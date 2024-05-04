function quizQstn(questionNumber) {
    //remove welcome text
    removeWelcomeText();

    // change title
    document.title = "Question " + questionNumber;

    // make question card
    let card = document.createElement("div");
    card.classList.add("card");
    let title = document.createElement("h2");
    title.classList.add("title");
    var question = document.createElement("p");
    title.innerText = "Question " + questionNumber + ":";
    card.append(title);
    card.append(question);
    document.body.appendChild(card);

    // add proper question

    if (questionNumber = 1) {
        question.innerText = "Which pray would you like to eat for dinner?";
    }

    if (questionNumber = 2) {

    }

    if (questionNumber = 3) {

    }
}

function removeWelcomeText() {
    let welcomeCard = document.querySelector("body > div.welcome-card");
    welcomeCard.style.display = "none";
}