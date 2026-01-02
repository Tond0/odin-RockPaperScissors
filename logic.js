let playerScore = 0;
let cpuScore = 0;

playGame();

function playGame() {

  playerScore = 0;
  cpuScore = 0;

  for (let i = 0; i < 5; i++) {
    console.log("Round numer " + i);

    let playerChoice = getPlayerChoice();
    let cpuChoice = getCPUChoice();

    let roundResult = playRound(cpuChoice, playerChoice);
    switch (roundResult) {
      case 0:
        console.log("Draw");
        break;

      case 1:
        console.log("Cpu Won");
        cpuScore += 1;
        break;

      case 2:
        console.log("Player Won");
        playerScore += 1;
        break;

      default:
        console.log("Something broke!");
        break;
    }

    console.log("Score is now: CPU " + cpuScore + " Player " + playerScore);
    console.log("");
  }
}

function playRound(inCpuChoice, inPlayerChoice) {
  //Draw Condition
  if (inCpuChoice == inPlayerChoice) return 0;
  //Cpu Won Condition
  if ((inCpuChoice > inPlayerChoice) || (inCpuChoice == 0 && inPlayerChoice == 2)) return 1;
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
