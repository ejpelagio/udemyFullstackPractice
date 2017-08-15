// Creating an Empty ARRAY
var todos = [];
// creating the input are asking the user What would they like to do
var input = prompt("What would you like to do?");
// starting with a while loop "quit" "new" "list"
while (input !== "quit") {
  // if user input is list
  if (input === "list") {
    console.log(todos// else if user is new
    );

  } else if (input === "new") {
    // Ask for a new to do
    var newTodo = prompt("Enter a new to do!");
    // adding new to do with .push
    todos.push(newTodo);

  }
  // ask the user if they want to add another todo
  var input = prompt("What would you like to do?");

}

console.log("You quit the App!");
