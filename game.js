//Function: creates a new paragraph and append it to the HTML body
          "use strict"
        function createParagraph() {
            let para = document.createElement("p");
            para.textContent = "You clicked the button";
            document.body.appendChild(para);
        }
/* 1. Get references to all the buttons on the the page in an array format.
   2. Loop through all the buttons and add a click event listener to each one.

    when any button is pressed, the createParagraph() function will be run.
 */
        const buttons = document.querySelectorAll("button");

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", createParagraph)
        }
        //Variables and constants needed to store our data for the program
        let randomNumber = Math.floor(Math.random()*100) + 1;/*This variable is assigned a random number b/w 1 and 100,
  calculated using a mathematical algorithm. */
/*This first three constants store reference to the results paragraphs in our HTML (with classes
.guesses, .lastResult and . lowOrHi) used to insert values into the paragraphs.  */
        const guesses = document.querySelector(".guesses");
        const lastResult = document.querySelector(".lastResult");
        const lowOrHi = document.querySelector(".lowOrHi");
/* this two  constants store references to the form text input
 and submit button and are used to control submitting the guess  */
        const guessSubmit = document.querySelector(".guessSubmit");
        const guessField = document.querySelector(".guessField");
/*the two variable store a guess count of 1(used to keep track of how many guesses the player has had)
, and a reference to a reset button that doesnt exist yet(but later) */
        let guessCount = 1;
        let resetButton;
        guessField.focus();

        function checkGuess(){
     /* the function use this variable and sets its value to the current
     value entered inside the text field by the player.This value is then run
      run through the built-in  Number() constructor, just to make sure the
      the value is definitely a number. */
      let userGuess = Number(guessField.value);
      /* Conditional statement that test whether the guessCount variable is
      is equal to 1(i.e whether this is the player's first go or not). If it is
      we make the guesses paragraph's text content equal to Previous guesses:
      If not, we dont */
      if(guessCount===1){
          guesses.textContent =  "Previous guesses: "
      }
      /* This appends the current userGuess value onto the end of the guesses
      paragraph,plus a blank space so there will be a space between each guess shown */
      guesses.textContent += userGuess  + " ";
    /*This condition checks whether the user's guess is equal to the randomNumber
     set at the top.If is the game is won with a congratulatory message */
      if(userGuess === randomNumber){
          lastResult.textContent = "congratulations! You got it right!";
          lastResult.style.backgroundColor = "green";
          lowOrHi.textContent =  "";//This clears the contents of the Low/High guess information box.
          setGameOver();//this function is being run.
      }
      /*This conditional checks whether this turn is the user's last turn.
          If is, the function displays Game Over */
      else if(guessCount === 10){
          lastResult.textContent = "!!!GAME OVER!!!";
          lowOrHi.textContent = "" ;
          setGameOver();
        /* This conditionals run if the user didnt guess right i.e. the user number is less than
       the randomNumber with the corresponding messages  */
      }else {
          lastResult.textContent = "Wrong!";
          lastResult.style.backgroundColor = "red";
          if(userGuess < randomNumber){
              lowOrHi.textContent = "last guess was too low!";
          }else if(userGuess > randomNumber){
              lowOrHi.textContent = "Last guess was too high!";
          }
      }
      /* This increases the guessCount by 1 each time,empties the value out the
      form text field and focus it again, ready for the next guess to be entered  */
      guessCount++;
      guessField.value = ""
      guessField.focus();
  }
  //An eventListener added to the guessSubmit button which fires and run the checkGuess
//function when the player clicks the Submit button.
  guessSubmit.addEventListener("click",checkGuess);
     function setGameOver(){
   /* This disable the form text input and button so that the user wont submit
   more guesses after the game is over.  */
         guessField.disabled = true;
         guessSubmit.disabled = true;
     /* This generates a new button element, set its text label to "Start
     new game" and then add it to the bottom of our existing HTML. */
         resetButton = document.createElement("button");
         resetButton.textContent = "start new game";
         document.body.append(resetButton);
         /* This sets an event listener on our new button so that when it
         is clicked, a function called resetGame() is run.*/
         resetButton.addEventListener("click", resetGame);

         function resetGame(){
                guessCount = 1; //This puts the guessCount back to 1
         /* This empties all the text of the information paragraphs,all paragraphs is selected and  then
         loop through each one, setting their textContent to an empty string  */
             const resetParas = document.querySelectorAll(".resultParas p");
                for(let i = 0; i <resetParas.length; i++){
                    resetParas[i].textContent = "";

                }

           /*This removes the reset button from our code, enables the form elements
           and empties and focuses the text field, ready for a new to be entered */
                resetButton.parentNode.removeChild(resetButton);
                guessField.disabled = false;
                guessSubmit.disabled = false;
                guessField.value = "" ;
                guessField.focus();
                lastResult.style.backgroundColor = "white" ;
         /* This generates a new random number so that you are not just
         guessing the same number again */
                randomNumber = Math.floor(Math.random() * 100) +1;


            }

     }





