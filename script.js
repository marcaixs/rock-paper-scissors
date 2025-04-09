const ROCK = 'rock'
const PAPER = 'paper'
const SCISSORS = 'scissors'
const DRAW = 'Draw! try again!'
const WIN = 'You win! congratulations!'
const LOSE = 'You lose! try again!'

playGame();

function getComputerChoice(){
    let choice;
   let result = Math.floor(Math.random() * 3);
   switch(result){
    case 0:
        choice = ROCK;
        break;
    case 1:
        choice = PAPER;
        break;
    case 2:
        choice = SCISSORS;
        break;       
   }
   return choice;
}

function getHumanChoice(){
    let humanChoice = (prompt('Enter your move: rock, paper or scissors')).toLowerCase();
    let choice;
    switch(humanChoice){
     case 'rock':
         choice = ROCK;
         break;
     case 'paper':
         choice = PAPER;
         break;
     case 'scissors':
         choice = SCISSORS;
         break;       
    }
    return choice;
}



function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playground(humanChoice, computerChoice)
    console.log('Human: '+humanScore+' || Computer: '+computerScore)

    console.log('Final score: Human: '+humanScore+' || Computer: '+computerScore)


    function playground(humanChoice, computerChoice){
        
        if(humanChoice == computerChoice){
            console.log(DRAW)
        } else if 
        (humanChoice == ROCK && computerChoice == PAPER){
            console.log(LOSE)
            computerScore ++;
        }else if 
        (humanChoice == ROCK && computerChoice == SCISSORS){
            console.log(WIN)
            humanScore ++;
        }else if 
        (humanChoice == PAPER && computerChoice == ROCK){
            console.log(WIN)
            humanScore ++;
        }else if 
        (humanChoice == PAPER && computerChoice == SCISSORS){
            console.log(LOSE)
            computerScore ++;
        }else if 
        (humanChoice == SCISSORS && computerChoice == ROCK){
            console.log(LOSE)
            computerScore ++;
        }else if 
        (humanChoice == SCISSORS && computerChoice == PAPER){
            console.log(WIN)
            humanScore ++;
        }
    
    }

}