function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    let string = ['Rock', 'Paper', 'Scissors'];
    let result = string[random];
    return result;
}

function playRound(playerSelection, computerSelection) {

    let toLowerPlayer = playerSelection.toLowerCase();
    let toLowerComputer = computerSelection.toLowerCase();
    
    if (toLowerPlayer === toLowerComputer ) {
        return "Draw!!!";
    } else if ((toLowerPlayer === 'rock') && (toLowerComputer === 'scissors') ) {
        return 'You win! Rock beats Scissors';
    } else if ((toLowerPlayer === 'paper') && (toLowerComputer === 'rock') ) {
        return 'You win! Paper beats Rock.';
    } else if ((toLowerPlayer === 'Scissors') && (toLowerComputer === 'Paper')) {
        return 'You win! Scissors beats Paper.';
    } else if ((toLowerPlayer === 'rock') && (toLowerComputer === 'paper') ) {
        return 'You lose! Paper beats Rock.';
    } else if ((toLowerPlayer === 'Paper') && (toLowerComputer === 'Scissors') ) {
        return 'You lose! Scissors beats Paper.';
    } else if ((toLowerPlayer === 'scissors') && (toLowerComputer === 'rock')) {
        return 'You win! Rock beats Scissors.';
    }
}

function playGame() {
    
    for( let i = 0; i < 5; i++) {

        let userChoice = prompt('Type Rock, Paper or Scissors?', 'Rock');
        // console.log(userChoice);
        let computerChoice = getComputerChoice();
        // console.log(computerChoice);

        let result = playRound(userChoice, computerChoice);
        console.log(result);    // without this it won't show in console
    }

}