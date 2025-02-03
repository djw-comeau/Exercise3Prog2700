// Name: David Comeau
// Class: PROG2700 - Client Side Programming
// Instructor: Nadia Gouda
// Date: February 2, 2025
// Sources Used:
// https://www.geeksforgeeks.org/javascript-operators/
// https://www.geeksforgeeks.org/javascript-course-interaction-with-user/

/* 
Part I: Arithmetic Operators
These operators are used to perform simple math calculations, such as addition, subtraction, multiplication, division, and modulus. 
*/
let NumberOne = 42;
let NumberTwo = 84;
let NumberThree = 168;
let NumberFour = 336;
let NumberFive = 84;
console.log("Addition!", NumberOne + NumberTwo);
console.log("Division!", NumberFour / NumberOne);
console.log("Multiplication!", NumberThree * NumberFour);
console.log("Subtraction!", NumberTwo - NumberOne);
console.log("Modulus!", NumberFour % NumberTwo);

/* 
Part II: Relational Operators
These compare values and return a boolean result, either true or false.
*/
console.log("Greater than Operator.", NumberOne > NumberTwo);
console.log("Less than Operator", NumberOne < NumberTwo);
console.log("Greater than or equal to", NumberFour >= NumberThree);
console.log("Less than or equal to", NumberThree <= NumberTwo);
console.log("Stricly equal", NumberFive === NumberTwo);
console.log("Not equal", NumberOne !== NumberThree);

/*
Part III: Logical Operators
These operators determine whether or not values are equal or different, also known as AND/OR.
*/
let isSunny = true;
let isWeekend = true;
let WeatherNice = false;
console.log("Is the weather nice?", isSunny && WeatherNice);
console.log("Is it the weekend?", isWeekend && isSunny);
console.log("Should we have a picnic?", isSunny || isWeekend);

/*
Part IV: Assignment Operators
These operators assign values and perform calculations on variables.
*/ 
let score = 90;
score += 10;
console.log("I get +10 points for being awesome", score)
score -= 50;
console.log("Minus 50 points to Morgan because he's probably sleeping through class", score);

/*
Part V: User Interaction
This allows user interaction via pop-ups, which most people absolutely despise.
*/
let YourName = prompt('Identify Yourself');
alert(`You are ${YourName}`);
let YourAge = prompt('State Your Age');
alert(`Your age is ${YourAge}`);
alert(`If rain drops, then why does snow fall?`);