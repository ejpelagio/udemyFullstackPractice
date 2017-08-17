// Starting a function for print reverse
function printReverse(arr){
  // forloop looping backwards
  for (var i =  arr.length - 1; i >= 0; i--) {
    // Console Log array
console.log(arr[i]);
  }
}
printReverse([1,2,3,4,5]);

// This where Uniform Starts

// Starting my isUniformfunction
function isUniform(arr){
  // making a var equal to the first item
  var first = arr[0];
  // Looping thru my array
  for (var i = 1; i < arr.length; i++) {
    // if array is not equal to first
    if (arr[i] !== first){
      // Return
      return false;

    }
  }
  return true;
}
// SumArray Starts

// Creating sumArray Function
function sumArray(arr){
  // starting my total variable
  var total = 0;
  // using forEach
  arr.forEach(function(element){
    total += element;
  });
  // Returning total
  return total;
}

// Starting max()

// Creating my function max
function max(arr){
  // creating the var max =0
  var max = arr[0];
  // looping thru my array
  for (var i = 1; i < arr.length; i++) {
    // check if i is greater that i
    if (arr[i] > max ) {
      // max is now equal to array i
      max = arr[i];

    }
  }
  return max;
}
