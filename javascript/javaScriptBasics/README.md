# JavaScript Basics

 Review

 ## Boolean Logic
* Everything starts with the idea that a statement is either True or False

* Then we can combine those initial statements to create more complex statements that also evaluate to True or False.

``` JavaScript
Equality Operators
== vs. ===
var x = 99;

x == "99"  //true

x === "99" //false


var y = null;

y == undefined //true

y === undefined //false
"==" performs type coercion, while "===" does not

```

## Loops

* Repeating Things
* Understand the purpose of loops
* Define "DRY" code
* DRY: Don't Repeat Yourself

``` JavaScript

While Loops
Repeat code WHILE a condition is true
while(someCondition) {
  //run some code
}
Its very similar to an if statement, except it repeats a given code block instead of just running it once

EX:
While Loops

var num = 1;

while(num <= 10) {
  console.log(num);
  num += 2;
}

```
