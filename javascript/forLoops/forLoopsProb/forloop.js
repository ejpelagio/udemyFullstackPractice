// Problem #1
console.log("Printing all numbers between -10 and 19");
for (var i = -10; i < 20; i++) {
console.log(i);
}

// Problem #2
console.log("Printing all even numbers between 10 and 40");
for (var i = 10; i <= 40; i+=2) {
  console.log(i);
}

// Problem #2 alternative checking if my number is always even
console.log("Printing all even numbers between 10 and 40 option 2");

for (var i = 10; i <= 40; i+=1) {
  if(i % 2 === 0){
  console.log(i);
  }
}

// // Problem #3
console.log("Printing all odd numbers between 300 and 333");
for (var i = 300; i <= 333; i+=1) {
  if(i % 2 !== 0){
  console.log(i);
  }
}
// // Problem #4
console.log("Printing all numbers divisible by 5 and 3 between 5 and 50");
var num4 = 5;

for (var i = 5; i <= 50; i++) {
  if(i % 5 === 0 && i % 3 === 0){
  console.log(i);
  }
}
