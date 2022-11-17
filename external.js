const option = ["rock", "paper", "scissors"];
function computerPlay() {
  let random = option[Math.floor(Math.random() * option.length)];
  return random;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return ("It's a draw!");
  } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
    return Player=("You win! Rock beats scissors");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return Computer=("You lose! Paper beats rock");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return player=("You win! Paper beats rock");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return computer=("You lose! Scissors beat paper");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return player=("You win! Scissors beat paper");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return computer=("You lose!Rock beats scissors");
  }

}

function getPlayerChoice(){
   let validatedInput=false;
   while (validatedInput== false) {
      const choice=prompt("Rock Paper Scissors");
      if(choice==null){
         continue;
      }
      const choiceInlower = choice.toLowerCase();
      if(option.includes(choiceInlower)){
         validatedInput = true;
         return choiceInlower;
      }

   }
}
function game(){
   let scorePlayer=0;
   let scoreComputer=0;

   for (let i = 0; i < 5; i++) {
      const computerSelection = computerPlay();
      const playerSelection = getPlayerChoice(); 
      console.log(playRound(playerSelection, computerSelection));
      if(playRound(playerSelection,computerSelection) == ("You win! Rock beats scissors" || "You win! Paper beats rock" || "You win! Scissors beat paper")){
         scorePlayer++;
      }
    else if(playRound(playerSelection,computerSelection) == ("You lose! Scissors beat paper" || "You lose! Scissors beat paper" || "You lose!Rock beats scissors")){
         scoreComputer++;
      }
   }
   console.log("Game Over"); 

   if(scorePlayer > scoreComputer){
      console.log("Player wins");
   }
   else if(scorePlayer < scoreComputer){
      console.log("Computer wins");
   }
   else{
      console.log("Draw");
   }
}
game();