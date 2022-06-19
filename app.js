function computerPlay() {
    hand = ['Rock', 'Paper', 'Scissors'];
    randomIndex = Math.floor(Math.random() * 3);
    return hand[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    const result = document.querySelector('.result');
    const playerScoreDisplay = document.querySelector('#playerScore');
    const computerScoreDisplay = document.querySelector('#computerScore');
    

    if (playerSelection === computerSelection) {
        result.textContent = `DRAW! - Player: ${playerSelection}  Computer: ${computerSelection}`;    
    }
    else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        result.textContent = `YOU WON! - Player: ${playerSelection}  Computer: ${computerSelection}`;
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    }
    else {
        result.textContent = `YOU LOST! - Player: ${playerSelection}  Computer: ${computerSelection}`;
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }
}

let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => btn.addEventListener('click', function () {
    let player = `${this.dataset.id}`
    let computer = computerPlay();
    playRound(player, computer);
    if(playerScore === 5 || computerScore === 5) {
        announceWinner();
        finishGame();
    }
}));



function announceWinner() {
    const div = document.querySelector('.winner');
    const winner = document.createElement('p');
    if(playerScore > computerScore) {
        winner.textContent = 'CONGRATURATIONS! YOU WON!';
        div.appendChild(winner);
    } else {
        winner.textContent = 'OH NO! YOU LOST!';
        div.appendChild(winner);
    }
}

function finishGame() {
    const buttons = document.querySelectorAll('.btn');
    for(btn of buttons) {
        btn.setAttribute('disabled', 'true');
    }
}

// helper functions
function capitalise(str) {
    const first = str[0];
    const rest = str.substring(1);
    return first.toUpperCase() + rest.toLowerCase();
}
