// // Version #1
//
// // Creating a var and prompting the user
// var answer = prompt("Are we there yet");
// // my while loop checking if the users respose is yes or yeah
// while (answer !== "yes" && answer !== "yeahcd .") {
//   var answer = prompt("Are we there yet");
//
// }
// alert("YAY, We made it!!");

// Version #2

// Creating a var and prompting the user
var answer = prompt("Are we there yet");
// my while loop checking if the users respose is yes or yeah
while (answer.indexOf("yes") === -1) {
  var answer = prompt("Are we there yet");

}
alert("YAY, We made it!!");
