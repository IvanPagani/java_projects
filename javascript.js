console.log("Rock Paper Scissors Game");

function getComputerChoice() {

    let random = Math.random();
    let a;

    if (random <= (1/3)) {
        a = "rock";
    }
    else if (random <= (2/3)) {
        a = "paper";
    }
    else {
        a = "scissors";
    }

    return a;
}

function getHumanChoice() {

    let b = prompt("Choose rock, paper or scissors.", "rock, paper or scissors");
    b = b.toLowerCase();

    while ( !(b === "rock" || b === "paper" || b === "scissors") ) {

            console.log("That's not a valid choice.");
            b = prompt("Choose rock, paper or scissors.", "");
            b = b.toLowerCase();
    }

    return b;
}

// "a" is the computer choice
// "b" is the human choice

function playGame() {

    let computerScore = 0;
    let humanScore = 0;

    function playRound (a, b) {
        console.log("The Computer choice is: " + a + ".");
        console.log("The Human choice is: " + b + ".");
    
        if (a === "rock") {
            if (b === "scissors") {
                console.log("You lose! Rock beats Scissors.");
                computerScore += 1;
            }
            else if (b === "paper") {
                console.log("You win! Paper beats Rock.");
                humanScore += 1;
            }
            else {
                console.log("Tie!");
            }
        }
        else if (a === "paper") {
            if (b === "rock") {
                console.log("You lose! Paper beats Rock.");
                computerScore += 1;
            }
            else if (b === "scissors") {
                console.log("You win! Scissors beats Paper.");
                humanScore += 1;
            }
            else {
                console.log("Tie!");
            }
        }
        else {
            if (b === "paper") {
                console.log("You lose! Scissors beats Paper.");
                computerScore += 1;
            }
            else if (b === "rock") {
                console.log("You win! Rock beats Scissors.");
                humanScore += 1;
            }
            else {
                console.log("Tie!");
            }
        }
    }

    for (let i = 0; i <5; i++) {
        
        let computerchoice = getComputerChoice();
        let humanchoice = getHumanChoice();

        let play = playRound(computerchoice, humanchoice);

        console.log("Computer " + computerScore + " vs " + humanScore + " Human");
    }
}

let game = playGame();