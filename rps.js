let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userParaScore = document.querySelector("#userscore");
const compParaScore = document.querySelector("#compscore");

const compGenChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was a draw");
    msg.innerText = "Game was a draw";
    msg.style.backgroundColor = "blue";
};

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userParaScore.innerText = userScore;
        console.log("You WIN !!");
        msg.innerText = "You WIN !!";
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compParaScore.innerText = compScore;
        console.log("You LOSE :(");
        msg.innerText = "You LOSE :(";
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("User choice is : ", userChoice);
    const compChoice = compGenChoice();
    console.log("Comp choice is : ", compChoice);
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false:true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false:true;
        }else{
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});