var wins = 0;
var losses = 0;
var guesses_left = 9;
var your_guesses = []
var letterArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var winArea = document.getElementById("#wins_area");
var lossArea = document.getElementById("#losses_area")
var guessesLeftArea = document.getElementById("#guesses_left_area")
var yourGuessesArea = document.getElementById("#your_guesses_area")


document.onkeyup = function(event) {
    var userGuess = event.key
    var computerGuess = letterArray[Math.floor(Math.random()*letterArray.length)]
    for (var i = 0; i < letterArray.length; i++){ //check array values
        if (userGuess == letterArray[i]) { //check if userguess is equal to any values in aray  // if yes then check if userguess is not equal to le
                if (userGuess === computerGuess) {
                    wins++;
                    alert("you won!")
                    guesses_left=9;
                    your_guesses = []
                }
                if (userGuess !== computerGuess) {
                    guesses_left--;
                    your_guesses.push(" "+userGuess)
                }
                if (guesses_left<=0) {
                    losses++;
                    guesses_left=9;
                    your_guesses = []
                }
            else {
               // return null;
            }
        } 
    }
winArea.textContent = "Wins: " + wins;
lossArea.textContent = "Losses: " + losses;
guessesLeftArea.textContent = "Guesses Left: " + guesses_left
yourGuessesArea.textContent = "Your Guesses so far: " + your_guesses
}






//while userguess == letterArray[]{}