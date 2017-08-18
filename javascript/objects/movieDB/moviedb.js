var movies = [
  {
    title: "The Little Rascals",
    hasWatched: true,
    rating: 5
  },
  {
    title: "The Sandlot",
    hasWatched: false,
    rating: 5
  }

];

movies.forEach(function(movies){
  var result = "You have ";
  if (movies.hasWatched) {
    result += "watched ";
  } else {
    result += "Not seen ";
  }
  result += "\"" + movies.title + "\" - ";
  result += movies.rating + " stars";
  console.log(result);
});
