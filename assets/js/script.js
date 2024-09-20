// set the available choices
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

/**
 * Define the game rules:
 * Rock beats Scissors and Lizard
 * Paper beats Rock and Spock 
 * Scissors beat Paper and Lizard 
 * Lizard beats Paper and Spock
 * Spock beats Rock and Scissors
 */
const rules = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['paper', 'spock'],
    spock: ['rock', 'scissors'],
};

// Initialize score for player and computer
let playerScore = 0;
let computerScore = 0;

// Get the DOM elements for player and computer scores and result message
const playerScoreElem = document.getElementById('player-score');
const computerScoreElem = document.getElementById('computer-score');
const resultMessageElem = document.getElementById('result-message');

/**Add event listener for each choice button
 * Get the player's choice 
 * Get the computer's choice
 * Determine the result
 * Update the score based on the result
 * Display the result
 * */ 
document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = getComputerChoice();
        const result =getResult(playerChoice, computerChoice);

        updateScore(result);
        displayResult(result, playerChoice, computerChoice);
    });
});

// Add event listener to reset button to reset the game
document.getElementById('reset').addEventListener('click', resetGame);

/**
 * Function to get a random choice for the computer
 * Random index from choices
 * Return the computer's choice
 */
function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

/**
 * Function to determine the result of the game 
 * If choices match, it's a draw 
 * Player wins if their choice beats computer's
 * otherwise, player loses
 */
function getResult(playerChoice, computerChoice){
    if (playerChoice === computerChoice) {
        return 'draw';
    } else if (rules[playerChoice].includes(computerChoice)){
        return 'win';
    } else {
        return 'lose';
    }
}

/**
 * Function to update teh scores
 * increment player's score on win
 * Update the player's score on the page
 * Increment computer's score on loss
 * Update the computer's score on the page
 */
function updateScore(result){
    if (result === 'win'){
        playerScore++;
        playerScoreElem.textContent = playerScore;
    } else if (result === 'lose') {
        computerScore++;
        computerScoreElem.textContent = computerScore;
    }
}

/**
 * Function to display the result of the round
 * Start message with choices 
 * Add win message 
 * Add lose message 
 * Add draw message
 * Display the final result message
 */
function displayResult(result, playerChoice, computerChoice) {
    let message = `You chose ${playerChoice}. Computer chose ${computerChoice}. `;
    if (result === 'win') {
        message += 'You win!';
    } else if (result === 'lose') {
        message += 'You lose!';
    } else {
        message += "It's a draw!";
    }
    resultMessageElem.textContent = message;
}

/**
 * Function to reset the game
 * Reset player score
 * Reset computer score
 * Reset player score on the page
 * Reset computer score on the page
 * Display initial game message
 */
function resetGame(){
    playerScore = 0;
    computerScore = 0;
    playerScoreElem.textContent = playerScore;
    computerScoreElem.textContent = computerScore;
    resultMessageElem.textContent = 'Make your choice!';
}