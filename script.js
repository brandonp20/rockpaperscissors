let playerChoice, computerChoice;
let playerScore, computerScore = 0; 

function getPlayerChoice() {
    playerChoice = prompt("Rock, Paper, or Scissors?")
    playerChoice = playerChoice.toLowerCase();
    console.log(getPlayerChoice);
}

function getComputerChoice() {
    let compDecider = Math.random()
    if (compDecider >= 0 && compDecider < 0.33) {
        computerChoice = 'rock';
    } else if (compDecider >= .34 && compDecider < 0.66) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    console.log(computerChoice);
}

function determineWinner() {
    if (computerChoice === 'paper' && playerChoice ==='rock') {
        computerScore =  + 1;
        console.log("Computer Wins!");
    } else if (computerChoice === 'paper' && playerChoice ==='scissors') {
        playerScore =  + 1;
        console.log("Player Wins!");
    } else if (computerChoice === 'rock' && playerChoice ==='paper') {
        playerScore =  + 1;
        console.log("Player Wins!");
    } else if (computerChoice === 'rock' && playerChoice ==='scissors') {
        computerScore =  + 1;
        console.log("Computer Wins!");
    } else if (computerChoice === 'scissors' && playerChoice ==='paper') {
        computerScore =  + 1;
        console.log("Computer Wins!");
    } else if (computerChoice === 'scissors' && playerChoice ==='rock') {
        playerScore =  + 1;
        console.log("Player Wins!");
    } else {
        console.log("It's a tie!");
    }
    console.log("Player Score ${playerScore}");
}

getPlayerChoice()
getComputerChoice();
determineWinner();