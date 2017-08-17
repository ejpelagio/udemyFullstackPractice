// Creating an Empty ARRAY
var todos = [];
// creating the input are asking the user What would they like to do
var input = prompt("What would you like to do?");
// starting with a while loop "quit" "new" "list"
while (input !== "quit") {
  // if user input is list
  if (input === "list") {
    listTodos(// else if user is new
    );
  } else if (input === "new") {
    addTodo();
  }else if (input === "delete") {
      deleteTodo();

    }
    // ask the user if they want to add another todo
    var input = prompt("What would you like to do?");

    // Asking for the index to delete

  }
  console.log("You quit the App!");

  function listTodos() {
    console.log("**********");
    // Using foreach
    todos.forEach(function(todo, i) {
      console.log(i + ": " + todo);
    });
    console.log("**********");

  }

  function addTodo() {
    // Ask for a new to do
    var newTodo = prompt("Enter a new to do!");
    // adding new to do with .push to the array
    todos.push(newTodo);
    console.log("Added To Do!");
  }

  function deleteTodo() {
    // Adding the delete function
    var index = prompt("Enter index of todo to delete?");
    todos.splice(index, 1);
    console.log("Deleted an item!");
  }
