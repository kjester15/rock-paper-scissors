let playerScore = 0;
let computerScore = 0;
let round = 0;

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => button.addEventListener('click', playRound));

if ((round < 5) && (playerScore != computerScore)) {
    document.querySelector('.game-over').innerHTML = "Who will win!";
}
else {
    buttons.forEach(button => button.disabled = true) ;
    document.querySelector('.button').disabled = true;
    document.querySelector('.game-over').innerHTML = "Game over!";
}

function getComputerChoice () {
    let choice = Math.floor(Math.random()*3)+1
    switch(choice) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
    }
};

function playRound () {
    let playerSelection = this.id.toLowerCase();
    let computerSelection = getComputerChoice();
    let computerLower = computerSelection.toLowerCase();
    let compChoice = document.querySelector('.computer');
    document.querySelector('.computer').innerHTML = "Computer's Choice: ";
    compChoice.append(computerSelection);

    if ((playerSelection == "rock" && computerLower == "paper") || 
        (playerSelection == "paper" && computerLower == "scissors") || 
        (playerSelection == "scissors" && computerLower == "rock")) {
            document.querySelector('.winner').innerHTML = "You lose!";
            computerScore += 1;
    }
    else if ((playerSelection == "rock" && computerLower == "scissors") || 
        (playerSelection == "paper" && computerLower == "rock") || 
        (playerSelection == "scissors" && computerLower == "paper")) {
            document.querySelector('.winner').innerHTML = "You win!";
            playerScore += 1;
    }   
    else {
        document.querySelector('.winner').innerHTML = "It's a tie!";
    }
    round += 1;
    document.querySelector('.rounds').innerHTML = `Round: ${round}`;
    document.querySelector('.player-score').innerHTML = `You: ${playerScore}`;
    document.querySelector('.computer-score').innerHTML = `Computer: ${computerScore}`;
    return;
};