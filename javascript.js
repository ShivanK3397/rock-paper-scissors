
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

function getHumanChoice(){
    let choice = prompt("Rock,paper or scissors? ");
    return choice.toLowerCase();
}

let humanScore=0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){
    if (humanChoice==="rock"&&computerChoice==="scissors"){
        humanScore++;
        console.log("You win! Rock beats Paper");
    }
    else if (humanChoice==="rock"&&computerChoice==="rock"){
        console.log("Tie!")
    }
    else if (humanChoice==="rock"&&computerChoice=="paper"){
        computerScore++;
        console.log("You lose! Paper beats Rock")
    }
    else if (humanChoice==="paper"&&computerChoice==="rock"){
        humanScore++;
        console.log("You win! Paper beats Rock");
    }
    else if(humanChoice==="paper"&&computerChoice==="paper"){
        console.log("Tie!");
    }
    else if (humanChoice==="paper"&&computerChoice==="scissors"){
        computerScore++;
        console.log("You lose! Scissors beats Paper");
        
    }
    else if (humanChoice==="scissors"&&computerChoice==="paper"){
        humanScore++;
        console.log("You win! Scissors beats Paper");
        
    }
    else if (humanChoice==="scissors"&&computerChoice==="scissors"){
        console.log("Tie!");
    }
    else if (humanChoice=="scissors"&&computerChoice==="rock"){
        computerScore++;
        console.log("You lose! Rock beats Scissors");
    }
    else{
        console.log("Only enter Rock Paper or Scissors");
    }
}

function playGame(){
    for (let i = 0;i<5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    }

    if (humanScore>computerScore){
        console.log("Congrats! You Win")
    }
    else if (computerScore>humanScore){
        console.log("Oh no! You lose");
    }
    else{
        console.log("Wow! A tie");
    }
}

playGame();