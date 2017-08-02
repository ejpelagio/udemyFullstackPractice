// create secretNumber
var secretNumber = 4;

// Ask user for a guess return in a string
var stringGuess = prompt("Guess a number?");

var guess = Number(stringGuess);

// Check if users guess is right
if (guess === secretNumber) { alert("You got it right!");

}

//check if guess is higher
else if (guess > secretNumber) {alert("Too high, guess again!");

}
//otherwise, check if lower
else  {alert("Too low, guess again!");

}
