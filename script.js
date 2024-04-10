function getComputerChoice(){
    let choice = ['rock','paper','scissors'];
    let intChoice = Math.floor(Math.random() * 3);
    return choice[intChoice];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    let message = ['You win! '+player+' beats '+computer+'.', 'You lose! '+computer+' beats '+player+'.','Tie! Try again'];
    let result;

    if(player != 'rock'&& player != 'paper' && player != 'scissors') return 'Please enter correct answer'

    if(player == computer) result = 2;

    if(player == 'rock' && computer == 'scissors' 
    || player == 'paper' && computer == 'rock' || 
    player == 'scissors' && computer == 'paper') result = 0;

    if(computer == 'rock' && player == 'scissors' 
    || computer == 'paper' && player == 'rock' || 
    computer == 'scissors' && player == 'paper') result = 1;

    return message[result];
  }

function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 1; i<=5; i++){
        let playerSelection = prompt('Introduce rock, paper or scissors:');
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        console.log(result);
        if (result[4]=='w') playerScore ++;
        if (result[4]== 'l') computerScore ++;

        console.log('Player: '+playerScore+' Computer: '+computerScore);
    }
    if(playerScore>computerScore) console.log('Congratulations, you win!');
    if(playerScore<computerScore) console.log('You lose, try again');
    if(playerScore==computerScore) console.log('Tie');

}  
 playGame(); 

