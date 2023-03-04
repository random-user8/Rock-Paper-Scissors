function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    let string = ['Rock', 'Paper', 'Scissors'];
    let result = string[random];
    return result;
}

function playRound(playerSelection, computerSelection) {
    
    let toLowerPlayer = playerSelection.toLowerCase();
    let toLowerComputer = computerSelection.toLowerCase();

    if ((toLowerPlayer === 'rock') && (toLowerComputer === 'scissors') ) {
        console.log('You win! Rock beats Scissors');
    } else if ((toLowerPlayer === 'paper') && (toLowerComputer === 'rock') ) {
        console.log('You win! Paper beats Rock.');
    } else if ((toLowerPlayer === 'Scissors') && (toLowerComputer === 'Paper')) {
        console.log('You win! Scissors beats Paper.');
    } else if ((toLowerPlayer === 'rock') && (toLowerComputer === 'paper') ) {
        console.log('You lose! Paper beats Rock.');
    } else if ((toLowerPlayer === 'Paper') && (toLowerComputer === 'Scissors') ) {
        console.log('You lose! Scissors beats Paper.');
    } else if ((toLowerPlayer === 'scissors') && (toLowerComputer === 'rock')) {
        console.log('You win! Rock beats Scissors.');
    }
}
