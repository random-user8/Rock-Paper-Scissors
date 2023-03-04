function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    let string = ['Rock', 'Paper', 'Scissors'];
    let result = string[random];
    return result;
}