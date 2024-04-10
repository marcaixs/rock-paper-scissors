function getComputerChoice(){
    let choice = ['rock','paper','scissors'];
    let intChoice = Math.floor(Math.random() * 3);
    return choice[intChoice];
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    let result = '';

    if(player == computer) result = 'Tie';

    if(player == 'rock' && computer == 'scissors' 
    || player == 'paper' && computer == 'rock' || 
    player == 'scissors' && computer == 'paper') result = 'You win! '+player+' beats '+computer+'.';

    if(computer == 'rock' && player == 'scissors' 
    || computer == 'paper' && player == 'rock' || 
    computer == 'scissors' && player == 'paper') result = 'You lose! '+computer+' beats '+player+'.';

    return result;
  }
  
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));