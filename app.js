let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userSc = document.querySelector("#user-score");
const compSc = document.querySelector("#comp-score");

// to get the random number for computer
const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const num = Math.floor(Math.random() *3);
    return options[num];
}

// Helper to clear all borders and computer messages
const clearSelections = () => {
    document.querySelectorAll('.choice img').forEach(img => {
        img.style.border = 'none';
    });
    document.querySelectorAll('.comp-selection-msg').forEach(p => {
        p.innerText = '';
    });
};

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
    clearSelections();
    const compChoice = genCompChoice();

    // Highlight user selection
    const userImg = document.querySelector(`#${userChoice} img`);
    userImg.style.border = '5px solid black';

    // Highlight computer selection and show message
    const compImg = document.querySelector(`#${compChoice} img`);
    compImg.style.border = '5px solid red';
    const compMsg = document.querySelector(`#comp-msg-${compChoice}`);
    compMsg.innerText = `Computer selected ${compChoice}`;

    if(userChoice===compChoice) {
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


