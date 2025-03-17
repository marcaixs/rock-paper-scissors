const ROCK = 'rock'
const PAPER = 'paper'
const SCISSORS = 'scissors'

let humanScore = 0;
let computerScore = 0;

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
    let humanChoice = prompt('Enter your move: rock, paper or scissors');
    let choice;
    switch(humanChoice){
     case rock:
         choice = ROCK;
         break;
     case paper:
         choice = PAPER;
         break;
     case scissors:
         choice = SCISSORS;
         break;       
    }
    return choice;
}