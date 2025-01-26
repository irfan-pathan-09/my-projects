let symbols = document.querySelectorAll(".symbol")
let game = document.querySelector(".game")
let playersScore = document.querySelector("#players")
let computersScore = document.querySelector("#computers")
let showResult = document.querySelector(".msg")
let totalClick = document.querySelector("#count")

let compScore = 0;
let yourScore = 0;

let click = 0;

symbols.forEach((choice) => {
    choice.addEventListener("click", () => {
        click++;
        totalClick.innerHTML = click;
        const playerChoice = choice.getAttribute("id")
        calculation(playerChoice);
        result();
    })
})
const calculation = (playerChoice) => {
    const compChoice = compRandomChoice();
    if (playerChoice == compChoice) {
        drawGame();
    }
    if (playerChoice == "rock" && compChoice == "scissor") {
        yourScore++;
        playerWon()
    }
    if (playerChoice == "rock" && compChoice == "paper") {
        compScore++;
        compWon()
    }
    if (playerChoice == "scissor" && compChoice == "paper") {
        yourScore++;
        playerWon()
    }
    if (playerChoice == "scissor" && compChoice == "rock") {
        compScore++;
        compWon()
    }
    if (playerChoice == "paper" && compChoice == "rock") {
        yourScore++;
        playerWon()
    }
    if (playerChoice == "paper" && compChoice == "scissor") {
        compScore++;
        compWon()
    }
}

const compRandomChoice = () => {
    const options = ["rock", "paper", "scissor"]
    let ranNo = Math.floor(Math.random() * 3)
    return options[ranNo]
}

const result = () => {
    playersScore.innerHTML = yourScore;
    computersScore.innerHTML = compScore

}
const drawGame = () => {
    showResult.innerHTML = "It was a draw!"
    showResult.style.backgroundColor = "green";
}
const playerWon = () => {
    showResult.innerHTML = "You won the round"
    showResult.style.backgroundColor = "#1446A0";
}
const compWon = () => {
    showResult.innerHTML = "Computer won the round"
    showResult.style.backgroundColor = "#DB3069";
}

