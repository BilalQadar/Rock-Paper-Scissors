
let compScoret = 0;
let humanScoret = 0;
const compScore = document.getElementById("computer-score");
const humanScore = document.getElementById("human-score");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resetButton = document.getElementById("reset");
const gamesPlayed = document.getElementById("games-played");
const scoreBoard = document.getElementById("score-board");
const result = document.getElementById("result");

rockButton.addEventListener("click",function(){
  game("rock")
})

paperButton.addEventListener("click",function(){
  game("paper")
})

scissorsButton.addEventListener("click",function(){
  game("scissors")
})


resetButton.addEventListener("click",function(){
  // Resets the Score 0 and styles back to onload state
  humanScore.innerHTML = 0;
  compScore.innerHTML = 0;
  result.innerHTML = "Ready to Play?";
  gamesPlayed.innerHTML = "Games Played: " + 0;
  compScoret = 0;
  humanScoret = 0;
  console.clear();
  scoreBoard.classList.remove("score-board-tie");
  scoreBoard.classList.remove("score-board-losing");
  scoreBoard.classList.remove("score-board-winning");
  scoreBoard.classList.add("score-board");

})

function game(userChoice){
  const compChoice = random();
  const winner = whoWins(userChoice,compChoice);

  if (winner == "User-Win"){
    //Increment Score if human won the game
    humanScore.innerHTML = (humanScoret +1);
    humanScoret ++;

    //Adds a border color around the option clicked. Green if you won that game
    // Yellow if tied and red if lost

    if (userChoice == "rock"){
      setTimeout(function(){
        rockButton.classList.toggle("optionWin");
      },600)
      rockButton.classList.toggle("optionWin");}

    if (userChoice == "paper"){
      setTimeout(function(){
        paperButton.classList.toggle("optionWin");
      },600)
      paperButton.classList.toggle("optionWin");}

    if (userChoice == "scissors"){
      setTimeout(function(){
        scissorsButton.classList.toggle("optionWin");
      },600)
      scissorsButton.classList.toggle("optionWin");}

  }else if(winner == "Comp-Win"){
    compScore.innerHTML = (compScoret +1);
    compScoret ++;

    if (userChoice == "rock"){
      setTimeout(function(){
        rockButton.classList.toggle("optionLose");
      },600)
      rockButton.classList.toggle("optionLose");}

    if (userChoice == "paper"){
      setTimeout(function(){
        paperButton.classList.toggle("optionLose");
      },600)
      paperButton.classList.toggle("optionLose");}

    if (userChoice == "scissors"){
      setTimeout(function(){
        scissorsButton.classList.toggle("optionLose");
      },600)
      scissorsButton.classList.toggle("optionLose");}
  }
  else{
    if (userChoice == "rock"){
      setTimeout(function(){
        rockButton.classList.toggle("optionTie");
      },600)
      rockButton.classList.toggle("optionTie");}

    if (userChoice == "paper"){
      setTimeout(function(){
        paperButton.classList.toggle("optionTie");
      },600)
      paperButton.classList.toggle("optionTie");}

    if (userChoice == "scissors"){
      setTimeout(function(){
        scissorsButton.classList.toggle("optionTie");
      },600)
      scissorsButton.classList.toggle("optionTie");}

  }

  result.innerHTML = resultToWords(winner,userChoice,compChoice);
  gamesPlayed.innerHTML = "Games Played: " + (compScoret + humanScoret);

  scoreBoard.classList.remove("score-board-tie");
  scoreBoard.classList.remove("score-board-losing");
  scoreBoard.classList.remove("score-board-winning");

  // Changes the scoreboard background to green if winning, yellow if tied and
  // red if losing to computer
  if (humanScoret > compScoret){
    scoreBoard.classList.add("score-board-winning");
  }else if(humanScoret < compScoret){
    scoreBoard.classList.remove("score-board-tie");
    scoreBoard.classList.add("score-board-losing");
  }else{
    scoreBoard.classList.add("score-board-tie");
  }
}

//Helper Functions
function random(){
  //Randomly generates a computer choice, either rock, paper or scissors
  const options = ['rock','paper','scissors']
  var choice = Math.floor(Math.random() * 3);
  switch(choice){
    case 0:
      return options[0];
      break;
    case 1:
      return options[1];
      break;
    case 2:
      return options[2];
      break;
  }
}

function whoWins(humanChoice,compChoice){
  //Takes a human choice and a randomly generated computer choise to determine
  //who won the game of rock paper scissors
  //PARAMETERS: humanChoice -> str, compChoice -> str

  if (compChoice == humanChoice){
    return "Tie";
  }else if(humanChoice == "rock" && compChoice == "scissors"){
    return "User-Win";
  }else if(humanChoice == "paper" && compChoice == "rock"){
    return "User-Win";
  }else if(humanChoice == "scissors" && compChoice == "paper"){
    return "User-Win";
  } else{
    return "Comp-Win";
  }
}

function resultToWords(winner,humanChoice,compChoice){
  //Converts the result of a rock paper scissors game to a display sentence
  //PARAMETERS: winner -> str, humanChoice -> str, compChoice -> str

  console.log("Human choice: " + humanChoice);
  console.log("Computer choice "+ compChoice);
  console.log(winner);
  switch(winner){
    case "Tie":
      return "Its a tie!";
      break;
    case "User-Win":
      return humanChoice.toUpperCase() + " beats " + compChoice.toUpperCase() + ". User wins!";
      break;
    case "Comp-Win":
      return compChoice.toUpperCase() + " beats " + humanChoice.toUpperCase() + ". Computer wins!";
      break;
  }
}
