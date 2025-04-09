const ROCK = 'rock'
const PAPER = 'paper'
const SCISSORS = 'scissors'
const DRAW = 'Draw! try again!'
const WIN = 'You win! congratulations!'
const LOSE = 'You lose! try again!'

let computerScore = 0;
let humanScore = 0;

let humanChoice = ''

const score = document.querySelector('.score');
const buttonRock = document.querySelector('.rock');
const buttonPaper = document.querySelector('.paper');
const buttonScissors = document.querySelector('.scissors');
const result = document.querySelector('.result');

score.textContent = `Human: ${humanScore} - Computer: ${computerScore}`

buttonRock.addEventListener('click', ()=> {
    humanChoice = ROCK;
    playGame();
});
buttonPaper.addEventListener('click', ()=> {
    humanChoice = PAPER;
    playGame();
});
buttonScissors.addEventListener('click', ()=> {
    humanChoice = SCISSORS;
    playGame();
});

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


 function playground(humanChoice, computerChoice){   

    if(humanChoice == computerChoice){
            result.innerHTML=DRAW;
    } else if 
    (humanChoice == ROCK && computerChoice == PAPER){
        result.innerHTML=LOSE
            computerScore ++;
        }else if 
        (humanChoice == ROCK && computerChoice == SCISSORS){
            result.innerHTML=WIN
            humanScore ++;
        }else if 
        (humanChoice == PAPER && computerChoice == ROCK){
            result.innerHTML=WIN
            humanScore ++;
        }else if 
        (humanChoice == PAPER && computerChoice == SCISSORS){
            result.innerHTML=LOSE
            computerScore ++;
        }else if 
        (humanChoice == SCISSORS && computerChoice == ROCK){
            result.innerHTML=LOSE
            computerScore ++;
        }else if 
        (humanChoice == SCISSORS && computerChoice == PAPER){
            result.innerHTML=WIN
            humanScore ++;
        }
    
    }

function playGame(){
    let computerChoice = getComputerChoice();

    playground(humanChoice, computerChoice);
    score.textContent = `Human: ${humanScore} - Computer: ${computerScore}`

    if(humanScore == 5 || computerScore == 5 ){
        
        if(humanScore > computerScore){
            result.textContent = 'Game Over! Player wins!'
        } else if(humanScore < computerScore){
            result.textContent = 'Game Over! Computer wins!'
        }
    }
}

