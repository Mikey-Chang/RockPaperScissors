function getComputerChoice() {
    let computerChoice = ["rock", "paper", "scissors"];
    return  computerChoice[Math.floor(Math.random() * 3)];
}


let score = [0, 0];
    scorePlayer = score[0];
    scoreComputer = score[1];
    computerRPS = getComputerChoice();

function playerRPS() {
    let playerInput;
    while (true)
        if (!playerInput) {
            playerInput = prompt("Rock, Paper, Scissors...");
        } else if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors") {
            return playerInput;
        } else {
            playerInput = prompt("Please try again. Rock, Paper, or Scissors?")
        }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        scoreComputer++;
        return "You lose! Paper beats rock.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        scorePlayer++;
        return "You win! Rock beats scissors.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        scorePlayer++;
        return "You win! Paper beats rock.";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        scoreComputer++;
        return "You lose! Scissors beats paper.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        scoreComputer++;
        return "You lose! Rock beats scissors.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        scorePlayer++;
        return "You win! Scissors beats paper.";
    }
}

function game() {
    let round = 0;
    while (round < 5) {
        console.log(playRound(playerRPS(), computerRPS));
        round++;
    }
    console.log(theWinner());
}

function theWinner() {
    if (scoreComputer > scorePlayer) {
        return `You lost ${scoreComputer} to ${scorePlayer}.`;
    } else if (scoreComputer === scorePlayer) {
        return `You tied ${scoreComputer} to ${scorePlayer}.`;
    } else if (scorePlayer > scoreComputer) {
        return `You won ${scorePlayer} to ${scoreComputer}!`;
    }
}

game();
