let playerScore = 0;
let computerScore = 0;
let round = 1;

const buttons = Array.from(document.querySelectorAll('.button'));
buttons.forEach(button => button.addEventListener('click', playRound));
document.querySelector('#refresh').addEventListener('click', refreshPage);

function refreshPage() {
    document.location.reload();
}

function continueGame() {
    if (round >= 6) {
        if (playerScore != computerScore) {
            buttons.forEach(button => button.disabled = true);
            document.querySelector('.button').disabled = true;
            document.querySelector('.rounds').innerHTML = "GAME OVER";
            if (playerScore > computerScore) {
                document.querySelector('.game-over').innerHTML = "CONGRATS! YOU WIN!";
            }
            else {
                document.querySelector('.game-over').innerHTML = "YOU LOSE!";
            }
            document.querySelector('#refresh').style.fontSize = '25px';
            document.querySelector('#refresh').innerHTML = 'PLAY AGAIN?';
            document.querySelector('#refresh').style.padding = '12px';
            return;
        }
    }
}

function getComputerChoice () {
    let choice = Math.floor(Math.random()*3)+1
    switch(choice) {
        case 1:
            return 'ROCK';
        case 2:
            return 'PAPER';
        case 3:
            return 'SCISSORS';
    }
};

function playRound () {
    round += 1;
    document.querySelector('.rounds').innerHTML = `ROUND: ${round}`;
    let playerSelection = this.id.toLowerCase();
    let computerSelection = getComputerChoice();
    let computerLower = computerSelection.toLowerCase();
    let compChoice = document.querySelector('.computer');
    document.querySelector('.computer').innerHTML = "COMPUTER'S CHOICE: ";
    
    // change computer's image to match it's random choice
    if (computerLower == 'rock') {
        document.getElementById('computer-image').src="img/rock.png";
    }
    else if (computerLower == 'paper') {
        document.getElementById('computer-image').src="img/paper.png";
    }
    else {
        document.getElementById('computer-image').src="img/scissors.png";
    }

    // display message based on win or loss for round and update score
    if ((playerSelection == "rock" && computerLower == "paper") || 
        (playerSelection == "paper" && computerLower == "scissors") || 
        (playerSelection == "scissors" && computerLower == "rock")) {
            document.querySelector('.winner').innerHTML = "TOUGH LUCK!";
            computerScore += 1;
    }
    else if ((playerSelection == "rock" && computerLower == "scissors") || 
        (playerSelection == "paper" && computerLower == "rock") || 
        (playerSelection == "scissors" && computerLower == "paper")) {
            document.querySelector('.winner').innerHTML = "NICE ONE!";
            playerScore += 1;
    }   
    else {
        document.querySelector('.winner').innerHTML = "IT'S A DRAW!";
    }

    // update scores at top of screen
    document.querySelector('.player-score').innerHTML = `YOU: ${playerScore}`;
    document.querySelector('.computer-score').innerHTML = `COMPUTER: ${computerScore}`;
    continueGame();
    return;
};