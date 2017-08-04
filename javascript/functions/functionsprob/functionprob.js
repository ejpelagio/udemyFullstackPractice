// // Creating a function isEven
// function isEven(num){
//   // Evaluating the number to check if it's even
//   if(num % 2 === 0){
//     // if number is even return true ELSE
//     return true;
//   }
//   // ELSE if number is not even return false
//   else{
//     return false;
//   }
// }
// Solution #2 to is Even

// Creating a function isEven
function isEven(num){
  // Evaluating the number to check if it's even
  return num % 2 === 0;
}

// Factorial function
function factorial(num){
  // define a result variable
  var result = 1;
  // calculate factorial and store value in result
  for (var i = 2; i < num; i++) {
  result *= i;
  }
  return result;
}

// KebabToSnake Problem
function kebabToSnake(str){
  var newStr = str.replace(/-/g, "_");
  return newStr;
}
