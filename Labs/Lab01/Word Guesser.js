// Create global arrays
var word = ['F', 'O', 'X']
var guesses = ['_', '_', '_']


// Guess Letter
function guessLetter(letter) {

    var i;
    var correct = false;            // Set to false at beginning of game
    var guessAgain = false;

    // Iterate through word[]
    for (i = 0; i < word.length; i++) {
        // console.log(word[i])

        // Check each position of word[] against the guessed letter
        if (word[i] == letter) {
            guesses[i] = letter;    // If guessed letter matches a word letter, change guesses[] to reflect that
            correct = true;         // Guessed letter existed in word[]
        }

        if (guesses[i] = '_') {     // If guessed letter is not in word, i.e. is underscore, not letter
            guessAgain = true;      // Guess another letter
        }
    }

    // Correct guess
    if (correct) {
        console.log("Correct!")         // Congratulate the user if they found a new letter
        console.log(guesses.join(''));  // Add guessed letter to guesses[], output to console
        if (!guessAgain) {              // Game over, no more guesses
            console.log('You win!');    // Game won
        }
    } else {
        console.log('Incorrect, guess again!');
    }
}


guessLetter('F');
guessLetter('O');
guessLetter('D');
guessLetter('X');
