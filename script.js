let playerChoice;
let computerChoice; 

getPlayerChoice = prompt("Rock, Paper, or Scissors?")
console.log(getPlayerChoice);

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

getComputerChoice();