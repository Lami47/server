// if, else if, else
if (b === 0) { //condition
    //for what we can predict and is very limited
    //  block of code to be executed if the condition is true
    throw new Error("You tried to divide by 0")
  } else{
    //for what we cant always predict and can be very vast
    //  block of code to be executed if the condition is false
    console.log("Result: ${Result}")
  } else if{
    // for when we can predict all outcomes and we can list them out in else if statements
  };

// var, automatically , letor const
var a = 10;
//or
a = 10
//automatically declared
let b = 2;
//variables that will change
const name = "Liam";
//use for variables that wont change in the forseeable future

// array
var cars = ["Volvo","BMW","Merc", "mini-cooper"]
//or
var cars = [];
cars[0] = "Volvo";
cars[1] = "BMW";
//to get the amount of items in the container we look for the length +1(to get the exact number of items in the array)

// Async - > callback, async, promise and await

// functions

//arrow functions
let myFunction = (a, b) => a*b; //for this function a is being multiplied by b
//or
hello = () => {
    return "Hello World!"
}
//here we are saying that hello will be used in place of Hello world...basicall hello = Hello world

//Objects
//Object creation/structuring
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
}
//Object Destructuring
let {firstName, lastName, age} = person

// for loop
// this prints the name of each item in the array and seperates them by a break.
for (let i = 0; i < cars.length; i++){ //let i = 0 means i is set to the 1st value in the array. thereafter the condition of the for loop is defined. and finally it says how the for loop will grow(++ is +1)
    text += cars[i] + "<br>";  //the function
}

//while loop
// while i is less than 10 it will print i
let i = 0
while (i<10){
    text += "The number is " + i;
    i++
}
//do loop
//does the loop once then checks if it still meets the condition before it repeats the loop
do {
    text += "The number is " + i;
    i++;
}
while (i < 10);


//basically looping over an array/string = writing everything in the array
// looping over an array
const cars = ["BMW", "Volvo", "Mini"];
let text = "";
for (let x of cars) {
    text += x  // + "<br>" will break after each item is written
}

// looping over a string
let language = "JavaScript";
let text = "";
for (let x of language){
    text += x
}

//try and catch aka error handling
try {
    if(x.trim() == "") throw "empty"; //attempts to run this line
    if(isNaN(x)) throw "not a number"; // if the input was a letter or something other than a number
    x = Number(x);
    if(x < 5) throw "too low.."; // if the number is less than 5 its too low
    if(x > 10) throw "too high!"; // if the number is greater than 10 it is too high
}catch(err){
    message.innerHTML = "Input is " + err; // if issues are found they are caught here, usually through a display method
}

// call back
function first() {
    myDisplayer("hello");
}
function second() {
    myDisplayer("goodbye");
}
second();
first();

// async
function myDisplayer(something) {
    document.getElementById("demo").innerHTML = something;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);

// waits for intervals
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}

//promise
let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );

// switch, case

// json