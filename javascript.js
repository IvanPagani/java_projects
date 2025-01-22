console.log("Hello World!");

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

    while ( !(b === "rock" || b === "paper" || b === "scissors") ) {

            console.log("That's not a valid choice.");
            b = prompt("Choose rock, paper or scissors.", "");
    }

    return b;
}


let computerchoice = getComputerChoice();
console.log("The Computer choice is: " + computerchoice);
let humanchoice = getHumanChoice();
console.log("The Human choice is: " + humanchoice);