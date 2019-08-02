 


const letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

let wins = 0;
let losses = 0;
let guess = 10;

   
  randomGuess = letter[Math.floor(Math.random() * letter.length)];


  document.onkeypress = function(event) {
   var userGuess = event.key;

  
   if(userGuess === randomGuess){
       wins++;
       guess = 10;
   }

  
   if (userGuess !== randomGuess) {
       guess--;
   }

   if(guess === 0){
       losses++;
       guess = 10;
   }
   //HTML output
   document.getElementById('wins-text').innerHTML = "Wins: " + wins;
   document.getElementById('losses-text').innerHTML = "losses: " + losses;
   document.getElementById('guesses-text').innerHTML = "Guesses left: " + guess;
   document.getElementById('userGuess-text').innerHTML = "Your guesses so far: " + userGuess;
}