// Square Number
function squareNumber(num) {
    var squaredNum = (num * num);
    console.log("The result of squaring the number " + num + " is " + squaredNum);
    return squaredNum;
}

squareNumber(3);


// Half Number
function halfNumber(num) {
    var halvedNum = (num / 2);
    console.log("Half of " + num + " is " + halvedNum)
    return halvedNum;
}

halfNumber(5);


// Percent Of
function percentOf(num1, num2) {
    var percentNum = ((num1 / num2) * 100);
    console.log(num1 + " is " + percentNum + "% of " + num2)
    return percentNum;
}

percentOf(2, 4);


// Area of Circle
function areaOfCircle(radius) {     // pi * r2
    area = Math.PI * squareNumber(radius);
    console.log("The area for a circle with radius " + radius + " is " + area)
    console.log("The area for a circle with radius " + radius + " is " + area.toFixed(2))
    return area;
}

areaOfCircle(2);


// Combination of Previous
function combo(num) {

    half = halfNumber(num);                 // Take half of argument num
    squared = squareNumber(half);           // Square result of half
    area = areaOfCircle(squared);           // Use squared as radius to calculate area of a circle
    percent = percentOf(area, squared);     // Use area to calculate percent in relation to squared

    return half, squared, area, percent;
}

combo(10);




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




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
