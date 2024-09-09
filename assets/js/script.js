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