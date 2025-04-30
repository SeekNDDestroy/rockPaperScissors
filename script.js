function getComputerChoice(){
    let number = Math.round(Math.random()*2);
    if(number === 0) return 'rock';
    else if(number === 1) return 'paper';
    return 'scissors';
}


function getHumanChoice(){
    let choice = prompt("Enter your choice (rock, paper or scissor): ")
    choice = choice.toLocaleLowerCase()
    return choice;
}

let humanScore = 0,
    computerScore = 0;

let playRound = (humanChoice, computerChoice) =>{
    if(humanChoice === computerChoice){
        console.log("-------------------------------");
        console.log(`human choice: ${humanChoice}, computer choice ${computerChoice}`);
        console.log(`human score: ${humanScore}, computer score ${computerScore}`);
        console.log("TIE");
        return;
    }else if(humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'scissors' && computerChoice === 'paper' || humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore += 1;
        console.log("-------------------------------");
        console.log(`human choice: ${humanChoice}, computer choice ${computerChoice}`);
        console.log(`human score: ${humanScore}, computer score ${computerScore}`);
        console.log('HUMAN WON');
        return;
    }
    computerScore += 1;
    console.log("-------------------------------");
    console.log(`human choice: ${humanChoice}, computer choice ${computerChoice}`);
    console.log(`human score: ${humanScore}, computer score ${computerScore}`);
    console.log('COMPUTER WON');
}



function playGame(){
    for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    if(humanScore === computerScore){
        console.log(`It's a tie`);
        return;
    }
    humanScore > computerScore ? console.log('human won') : console.log('computer won');;
}





playGame();