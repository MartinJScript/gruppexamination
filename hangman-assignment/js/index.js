parts = document.querySelector('figure');
wordSpace = document.getElementById("word");
btn = document.querySelector("button");

const usePart = ["scaffold", "head", "body", "arms", "legs"];
const words = ["banana", "orange", "kiwi", "lemon", "pear"];

function Wrong() {
   parts.classList.add(usePart[0]);
   usePart.shift();
 
   if (usePart[0] == undefined) {
    wordSpace.innerHTML = "<h1>YOU LOST!<h1>";
   }
}

 let correctWord = "";
 let guessedLetter = [];

function getText(){
  let inputField = document.getElementById("textInput").value;
  return inputField;
}

 function generateWord() {
   
   let number = Math.floor(Math.random() * words.length);
   for (let index = 0; index < words[number].length; index++) {
       guessedLetter.push("*");  
   }
   console.log(guessedLetter);
   for (let index = 0; index < guessedLetter.length; index++) {
       correctWord += guessedLetter[index];
   }
   
   wordSpace.innerHTML = `
   <h1>${correctWord}</h1>`;
   
   return words[number];
 }
let blala = btn.addEventListener("click", gameEngine)
randomWord = generateWord();

function gameEngine() {
  guess = getText();
  guessArray = [...randomWord];
    guessIndex =  guessArray.indexOf(guess);

    if (guess.length == 1) {
      if (guessIndex == -1) {
        Wrong()
      }
          for (let index = 0; index < randomWord.length; index++) {        
            if (guess == randomWord[index]) {
              guessedLetter[index] = guess;
              correctWord = "";
              for (let index = 0; index < guessedLetter.length; index++) {
                correctWord += guessedLetter[index];
              }
              wordSpace.innerHTML = `
              <h1>${correctWord}</h1>`;
              won = guessedLetter.indexOf("*");
              if (won == -1) {
                wordSpace.innerHTML = "<h1>YOU WON!<h1>";
              }
              
            }       
          }
    }
    else {
      console.log("bad boy")
    }
}
