let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

let updateUserScore = document.getElementById("user-score")

let updateComprScore = document.getElementById("comp-score")


const msg = document.querySelector("#msg")

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was Draw");
    msg.innerText = "Game Draw. Play Again";
    msg.style.backgroundColor = "#081b31"; 
}

const showWinner = (userWin) => {
    if(userWin){
        console.log("You Win")
        msg.innerText = "You Win";
        userScore++;
        updateUserScore.innerText = userScore;
        msg.style.backgroundColor = "green"; 
    }
    else{
        console.log("You Lose")
        msg.innerText = "You Lose";
        compScore++;
        updateComprScore.innerText = compScore;
        msg.style.backgroundColor = "red"; 
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    // Generate Computer Choice
    const ComputerChoice = genCompChoice();
    console.log("comp choice = ",ComputerChoice);

    if(userChoice == ComputerChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice == "rock"){
            //scissors,paper 
            if(ComputerChoice === "paper"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        else if(userChoice == "paper"){
            // rock,scissors
            if(ComputerChoice === "scissors"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        else{
            if(ComputerChoice === "rock"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});