# Arrays

## Objectives
********
* Understand arrays conceptually
* Write code using JS arrays

## Arrays come with a few built-in methods that make our life easier. We're going to cover:

* push/pop
* shift/unshift
* indexOf
* slice

### Push and Pop
```javascript

var colors = ["red", "orange", "yellow"];
colors.push("green");
//["red", "orange", "yellow", "green"]
Push and Pop
Use push to add to the end of an array:
var colors = ["red", "orange", "yellow"];
colors.pop();
//["red", "orange"]

//pop() returns the removed element
var col = colors.pop();  //orange
```
### Shift and Unshift

```javascript
var colors = ["red", "orange", "yellow"];
colors.unshift("infrared")
//["infrared", "red", "orange", "yellow"]
Shift and Unshift
Use unshift to add to the front of an array:
var colors = ["red", "orange", "yellow"];
colors.shift();
//["orange", "yellow"]

//shift() also returns the removed element
var col = colors.shift();  //orange


```
### IndexOf

```javascript
var friends = ["Charlie", "Liz", "David", "Mattias", "Liz"];

//returns the first index at which a given element can be found
friends.indexOf("David"); //2
friends.indexOf("Liz"); //1, not 4

//returns -1 if the element is not present.
friends.indexOf("Hagrid"); //-1


```
### Slice
```javascript
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
//use slice to copy the 2nd and 3d fruits
//specify index where the new array starts(1) and ends(3)
var citrus = fruits.slice(1, 3);

//this does not alter the original fruits array
//citrus contains ['Orange','Lemon']
//fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];

//you can also use slice() to copy an entire array
var nums = [1,2,3];
var otherNums = nums.slice();
//both arrays are [1,2,3]

```
### Splice
```javascript
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
//use slice to copy the 2nd and 3d fruits
//specify index where the new array starts(1) and ends(3)
var citrus = fruits.slice(1, 3);

//this does not alter the original fruits array
//citrus contains ['Orange','Lemon']
//fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];

//you can also use slice() to copy an entire array
var nums = [1,2,3];
var otherNums = nums.slice();
//both arrays are [1,2,3]

```

### For vs. ForEach

* JavaScript provides an easy built-in way of iterating over an array: ForEach

* To loop over an array using a for loop, we need to make use of the array's  length property

```javascript
//with a for loop
var colors = ["red", "orange", "yellow", "green"];

for(var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//using forEach
var colors = ["red", "orange","yellow", "green"];

colors.forEach(function(color){
  console.log(color);
});

```
