console.log("20 11 23 JS intro Lecture"); // check that files are linked

// Methods

// simple output
console.log("JavaScript Lecture"); 
console.log("Autumn Ragland");
alert("JavaScript Lecture");
alert("Autumn Ragland");

// simple input
prompt("What's your name?");
confirm("Do you like JS?");

// Variables
let userName = "Autumn"; // string
let userAge = 22; // integer
let isInstructor = false; // boolean

console.log("------------Original Values------------");
console.log(userName);
console.log(userAge);
console.log(isInstructor);
console.log("------------Updated Values------------");
userName = "Chris"; // redefine variable
console.log(userName);
console.log(userAge + 1); // add one to age int
console.log(!isInstructor); // inverse value using not(!)
// console.log("------------Incorrect Behaviour------------");
// console.log(userName + 1);
// console.log(!userAge);
// console.log(isInstructor + 3);

let userNameInput = prompt("What's your name?"); //prompting and saving the value
console.log(userNameInput); // output response

let userAgeInput = prompt("How old are you?"); // prompting and saving the value
console.log(userAgeInput + 1); // attempt to do math on response, convert type
userAgeInput = parseInt(userAgeInput); // convert type
console.log(userAgeInput + 1); // do math on response

let isInstructorInput = confirm("Are you an instructor?"); // ask for confirmation
console.log(isInstructorInput); // output choice

let userNameFormatted = prompt("What's your name"); // returns string
let userAgeFormatted = parseInt(prompt("How old are you?")); // return int
let isInstructorFormatted = confirm("Are you an instructor"); // return bool

// console.log("User Name is " + userNameFormatted); // concatenation
// console.log(`User Name is ${userNameFormatted}`); // string template

console.log(`Hey ${userNameFormatted}! You are currently ${userAgeFormatted} years old. Next year you will be ${userAgeFormatted + 1}. It is ${isInstructorFormatted} that you are an instructor`);

alert(`Hey ${userNameFormatted}! You are currently ${userAgeFormatted} years old. Next year you will be ${userAgeFormatted + 1}. It is ${isInstructorFormatted} that you are an instructor`);
