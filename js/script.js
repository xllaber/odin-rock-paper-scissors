/*Create 3 const (ROCK, PAPER, SCISSORS)
* Create function getComputerChoice to choose one of the three
* Generate random number 1-3 to get the choice
* Create variable computerSelection to store choice
* Ask user for input
* Check user input to be correct (case insensitive)
* Store input in variable playerSelection
* Create function playRound to choose winner
* Compare playerSelection to computerSelection
* Return the winner
* Create function game
* Make a 5-round loop
* Store amount of victories in playerWins and computerWins
* Return winner after the loop is done
*/

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
let computerSelection;

function randomNumber() {
    const MAX = 4;
    const MIN = 1;
    let choice;
    choice = Math.floor(Math.random() * (MAX - MIN)) + MIN;
    return choice;
}

function getComputerChoice(choice){
    choice = randomNumber();
    if (choice == 1) {
        computerSelection = ROCK;
        return computerSelection;
    } else if (choice == 2) {
        computerSelection = PAPER;
        return computerSelection;
    } else {
        computerSelection = SCISSORS;
        return computerSelection;
    }
}
console.log(getComputerChoice());

let playerSelection = prompt("Choose: ROCK, PAPER, SCISSORS").toUpperCase();
console.log(playerSelection);

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "TIE"
    } else if (playerSelection == ROCK && computerSelection == SCISSORS) {
        return "PLAYER WINS";
    } else if (playerSelection == SCISSORS && computerSelection == PAPER) {
        return "PLAYER WINS";
    } else if (playerSelection == PAPER && computerSelection == ROCK) {
        return "PLAYER WINS"
    } else{
        return "COMPUTER WINS"
    }
}
console.log(playRound(playerSelection, computerSelection));