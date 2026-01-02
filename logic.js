let playerScore = 0;
let cpuScore = 0;

//playGame();

const playerButtons = document.querySelectorAll(".playerButton");
playerButtons.forEach((btn) => {
  btn.addEventListener("click", () => playGame(btn.id));
});

const logParagraph = document.querySelector(".log");
const scoreParagraph = document.querySelector(".score");

function playGame(playerChoice) {
  //let playerChoice = getPlayerChoice();
  let cpuChoice = getCPUChoice();

  let roundResult = playRound(cpuChoice, playerChoice);
  switch (roundResult) {
    case 0:
      logParagraph.textContent = "Draw";
      console.log("Draw");
      break;

    case 1:
      console.log("Cpu Won");
      logParagraph.textContent = "CPU Won";
      cpuScore += 1;
      break;

    case 2:
      console.log("Player Won");
      logParagraph.textContent = "Player Won";
      playerScore += 1;
      break;

    default:
      console.log("Something broke!");
      break;
  }

  scoreParagraph.textContent = "CPU " + cpuScore + " - Player " + playerScore;
  console.log("Score is now: CPU " + cpuScore + " Player " + playerScore);
  console.log("");
}

function playRound(inCpuChoice, inPlayerChoice) {
  //Draw Condition
  if (inCpuChoice == inPlayerChoice) return 0;
  //Cpu Won Condition
  if (inCpuChoice > inPlayerChoice || (inCpuChoice == 0 && inPlayerChoice == 2))
    return 1;
  //Player Won Condition
  else return 2;
}

function getCPUChoice() {
  let cpuChoice = Math.floor(Math.random() * 3);

  let cpuChoiceString;
  switch (cpuChoice) {
    case 0:
      cpuChoiceString = "rock";
      break;

    case 1:
      cpuChoiceString = "paper";
      break;

    case 2:
      cpuChoiceString = "scissors";
      break;
  }

  console.log("CPU decided " + cpuChoiceString);

  return cpuChoice;
}

function getPlayerChoice() {
  let playerChoice = prompt("Rock, Paper or Scissors?");

  switch (playerChoice.toLowerCase()) {
    case "rock":
      return 0;

    case "paper":
      return 1;

    case "scissors":
      return 2;

    default:
      return -1;
  }
}
