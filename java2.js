const form = document.getElementById("quiz-form");
const items = document.getElementsByClassName("question-item");
const alert = document.getElementById("alert");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let score = 0;
    for (const item of items) {
        const awnser = item.querySelector("input:checked");

        if (awnser) {
            if (awnser.value === "true") {
                score++;
                item.classList = "question-item correct";
            } else {
                item.classList = "question-item incorrect";
            }
        }
    }
   
    if (score === items.length) {
        alert.innerHTML = "<div class='alert-title'>Congratulations!!</div>You got them all right!";
        alert.style.backgroundColor = "#4caf50";
        alert.style.color = "white";
        alert.style.display = "block";
    } else {
        alert.style.display = "none";
    }
});