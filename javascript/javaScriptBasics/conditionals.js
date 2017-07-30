//Getting the user's age and converting it to a number
//promt always returs as a string
var age = Number(prompt("What is yout age?"));

//if age is less than 18
if (age < 18) { console.log("You are too young !!");

}
if (age === 21) { console.log("Happy 21st birthday!");

}

// If age is odd

if (age % 2 !== 0) { console.log("Your age is odd!");

}

// if age is a perfect square
if (age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
}
