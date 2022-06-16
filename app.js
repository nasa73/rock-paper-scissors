function computerPlay() {
    hand = ['Rock', 'Paper', 'Scissors'];
    randomIndex = Math.floor(Math.random() * 3);
    return hand[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    console.log(`player: ${playerSelection} computer: ${computerSelection}`);
    if (playerSelection === computerSelection) {
        console.log('Draw!');
    }
    else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        console.log(`You Won! ${playerSelection} beats ${computerSelection}`);
        playerScore++;
    }
    else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        computerScore++;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = capitalise(prompt('Please enter Rock, Paper, or Scissors'));
        playRound(playerSelection, computerSelection);
    }
    console.log('******************')
    console.log(`Player: ${playerScore} Computer: ${computerScore}`);
    if(playerScore > computerScore) {
        console.log('CONGRATURATIONS! YOU WON!');
    } else if (playerScore < computerScore) {
        console.log('OH NO! YOU LOST!');
    } else {
        console.log('TIE GAME!')
    }
}

let playerScore = 0;
let computerScore = 0;
game();

// helper functions
function capitalise(str) {
    const first = str[0];
    const rest = str.substring(1);
    return first.toUpperCase() + rest.toLowerCase();
}
