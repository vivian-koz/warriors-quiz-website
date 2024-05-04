function quizQstn(questionNumber) {
    // change title
    document.title = "Question " + questionNumber;

    // make question card
    let card = document.createElement("div");
    card.classList.add("card");
    let title = document.createElement("h2");
    title.classList.add("title");
    title.value = "Question " + questionNumber;
    card.append(title);
    document.body.appendChild(card);

    //remove welcome text
    let h2 = document.querySelector("body > h2");
    let p = document.querySelector("body > p");
    let button = document.querySelector("body > button");
    h2.style.display = "none";
    p.style.display = "none";
    button.style.display = "none";
}