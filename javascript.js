
function getComputerChoice(){
    let num = (Math.floor(Math.random()*3));
    if (num===0){
        return "rock";
    }
    else if(num===1){
        return "paper";
    }
    else{
        return "scissors";
    }
}


let humanScore=0;
let computerScore = 0;

const humanWins = document.querySelector(".human-score");

const computerWins = document.querySelector(".computer-score");

const tie = document.querySelector("#tie");

function playRound(input){
    endGameMessage.textContent="";
    const humanChoice=input.target.id; 
    const computerChoice=getComputerChoice();
    if (humanChoice==="rock"&&computerChoice==="scissors"){
        tie.textContent=`Computer's Choice: ${computerChoice}`;
        humanScore++;
        humanWins.textContent=`${humanScore}`;
        
    }
    else if (humanChoice==="rock"&&computerChoice=="paper"){
        tie.textContent=`Computer's Choice: ${computerChoice}`;
        computerScore++;
        computerWins.textContent=`${computerScore}`;
    }
    else if (humanChoice==="paper"&&computerChoice==="rock"){
        tie.textContent=`Computer's Choice: ${computerChoice}`;
        humanScore++;
        humanWins.textContent=`${humanScore}`;
    }
    else if (humanChoice==="paper"&&computerChoice==="scissors"){
        tie.textContent=`Computer's Choice: ${computerChoice}`;
        computerScore++;
        computerWins.textContent=`${computerScore}`;  
    }
    else if (humanChoice==="scissors"&&computerChoice==="paper"){
        tie.textContent=`Computer's Choice: ${computerChoice}`;
        humanScore++;
        humanWins.textContent=`${humanScore}`;
        
    }
    else if (humanChoice=="scissors"&&computerChoice==="rock"){
        tie.textContent=`Computer's Choice: ${computerChoice}`;
        computerScore++;
        computerWins.textContent=`${computerScore}`;
    }
    else{
        tie.textContent="Tie"
    }
}

const buttons = document.querySelector(".buttons");
buttons.addEventListener("click",function(event){playRound(event)});

const endGameMessage = document.querySelector(".end-game-message")

buttons.addEventListener("click",checkWinner);


function checkWinner(){
    if(humanScore===5){
        endGameMessage.textContent="Congratulations! You Win";
        humanScore=0;
        humanWins.textContent="0";
        computerWins.textContent="0";
    }
    else if(computerScore===5){
        endGameMessage.textContent="Oh No, You Lose";
        computerScore=0;
        humanWins.textContent="0";
        computerWins.textContent="0";


    }
}
