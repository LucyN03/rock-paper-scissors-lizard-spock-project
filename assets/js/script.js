const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const rules = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['paper', 'spock'],
    spock: ['rock', 'scissors'],
};

let playerScore = 0;
let computer = 0;

const playerScoreElem = document.getElementById('player-score');
const computerScoreElem = document.getElementById('computer-score');
const resultMessageElem = document.getElementById('result-message');

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = getComputerChoice();
        const result =getResult(playerChoice, computerChoice);

        updateScore(result)
        displayResult(result, playerChoice, computerChoice);
    });
});

document.getElementById('rest').addEventListener('click', resetGame);

function getComputerChoice(){

}

function getResult(){

}

function updateScore(){

}

function displayResult(){

}

function resetGame(){
    
}