let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userSc = document.querySelector("#user-score");
const compSc = document.querySelector("#comp-score");
const selection = document.querySelector("#output");

// to get the random number for computer
const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const num = Math.floor(Math.random() *3);
    return options[num];
}

// for score calculation and message printing(win, lose)
const showWinner = (userWin) => {
    console.log(userWin);
    if(userWin) {
        msg.innerText = "You Win!!";
        msg.style.backgroundColor = "green";
        userScore++;
        userSc.innerText = `${userScore}`;
    } else {
        msg.innerText = "You Lose!!";
        msg.style.backgroundColor = "red";
        compScore++;
        compSc.innerText = `${compScore}`;
    }
}

// for game logic
const playGame = (userChoice) => {
    console.log("User Choice ", userChoice);
    const compChoice = genCompChoice();
    console.log("Comp Choice ", compChoice);
    selection.innerText = `You choose: ${userChoice}  <-=->  Computer choose: ${compChoice}`;

    if(userChoice===compChoice) {
        console.log("Its a Tie");
        msg.innerText = "Game Tie!! Please try again";
        msg.style.backgroundColor = "yellow";
    } else {
        let userWin = true;
        if(userChoice=="rock") {
            // scissor, paper
            userWin = compChoice=="paper" ? false : true;
        } else if(userChoice=="paper") {
            // rock, scissor
            userWin = compChoice=="rock" ? true : false;
        } else {
            // paper, rock
            userWin = compChoice=="rock" ? false : true;
        }
        showWinner(userWin);
    }

}

// when the images will be clicked - the first function - the Listener - onclick behaviour
for(let choice of choices) {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
}


