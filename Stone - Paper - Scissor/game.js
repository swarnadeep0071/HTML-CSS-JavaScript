let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "The Game Was Draw!";
  msg.style.backgroundColor = "#e9d8a6";
};

showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "Green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "Red";
  }
};

const playGame = (userChoice) => {
  //Generate Computer Choice
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    //draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else {
      userWin = compChoice === "scissor" ? true : false;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
