const eightballImg = document.getElementById("eightball-img");
const questionInput = document.getElementById("question");

// onClick function for an answer
const rndImg = () => {
    let rng = Math.floor(Math.random() * 20 + 1)
    if (questionInput.value === "") {
        alert("Sorry, you did not ask a question. Ask me anything!");
        return;
    } else {
        eightballImg.src = `../magic8ball/img/magic8ball_${rng}.png`
    }
}