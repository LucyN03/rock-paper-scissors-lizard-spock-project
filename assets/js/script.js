const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const rules = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['paper', 'spock'],
    spock: ['rock', 'scissors'],
};

let playerScore = 0;
let computerScore = 0;

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

document.getElementById('reset').addEventListener('click', resetGame);

function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getResult(playerChoice, computerChoice){
    if (playerChoice === computerChoice) {
        return 'draw';
    } else if (rules[playerChoice].includes(computerChoice)){
        return 'win'
    } else {
        return 'lose'
    }
}

function updateScore(result){
    if (result === 'win'){
        playerScore++;
        playerScoreElem.textContent = playerScore;
    } else if (result === 'lose') {
        computerScore++;
        computerScoreElem.textContent = computerScore;
    }
}

function displayResult(){

}

function resetGame(){

}