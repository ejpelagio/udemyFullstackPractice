// Movies array
var movies = [
  {
    title: "The Little Rascals",
    hasWatched: true,
    rating: 5
  },
  {
    title: "The Sandlot",
    hasWatched: true,
    rating: 5
  },
  {
    title: "Remember the Titans",
    hasWatched: true,
    rating: 5
  }

];
// Using forEach function
movies.forEach(function(movies){
  // creating a string "you have"
  var result = "You have ";
  // if user has watched
  if (movies.hasWatched) {
    // returning watched
    result += "watched ";
    // else not seen
  } else {
    result += "Not seen ";
  }
  result += "\"" + movies.title + "\" - ";
  result += movies.rating + " stars";
  // Console log my result
  console.log(result);
});
