const div=document.querySelector('#container');
const player=document.createElement('P');
div.appendChild(player);
const computer=document.createElement('P');
div.appendChild(computer);
const Winner=document.createElement('p'); 
div.appendChild(Winner); 
const hi=document.createElement("h1");
div.appendChild(hi);

function computerPlay() {
  let option = ["rock", "paper", "scissors"];
  return  option[Math.floor(Math.random() * option.length)];
  
}
function playRound(playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    return "It's a draw!";
  } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
    return "You win! Rock beats scissors";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats rock";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beat paper";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beat paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose!Rock beats scissors";
  }
}

let Playerscore=0;
let Computerscore=0;

function game(){     
   const buttons=document.querySelectorAll('button');

   buttons.forEach((button) => {
   
      button.addEventListener('click', ()=>{
         computerSelection=computerPlay();
         playerSelection=button.className;
      
         Winner.textContent=(playRound(playerSelection, computerSelection));
    
         if(playRound(playerSelection,computerSelection).startsWith("You win")){
         Playerscore +=1;
         player.textContent= `Player score:${Playerscore}`;
         
         if (Playerscore == 5) {
          hi.textContent= 'You won the game!';
          hi.style.color='yellow';
              document.getElementById('r').disabled=true; 
              document.getElementById('p').disabled=true;
              document.getElementById('s').disabled=true;
        
              const playAgain=document.createElement('button');
               playAgain.textContent='Play Again!';
               playAgain.style.color='blue';
               div.appendChild(playAgain);

               playAgain.addEventListener('click', ()=>{
               location.reload(); })  }  }

       else if(playRound(playerSelection,computerSelection).startsWith("You lose")){
       Computerscore +=1;  

        computer.textContent=`Computer score:${Computerscore}`;
        if (Computerscore == 5) {
          hi.textContent= 'You loss the game!';
          hi.style.color='red';
          document.getElementById('r').disabled=true;
          document.getElementById('p').disabled=true;
          document.getElementById('s').disabled=true;
  
          const playAgain=document.createElement('button');
           playAgain.textContent='Play Again!';
           playAgain.style.color='blue';
           div.appendChild(playAgain);

          playAgain.addEventListener('click', ()=>{
          location.reload();}) }}   
  })
});
}
game();
