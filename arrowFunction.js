// TASK 1

// Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/

const greet = (name) => {
  return `Hello, ${name}!`;
};

// to check our work
console.log(greet("Janna"));

// TASK 2

// Write a simple arrow function that takes two parameters and returns their sum.

const addNumbers = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Invalid. Inputs should be numbers";
  }
  return a + b;
};

// to check our work
console.log(addNumbers(50, 5));
console.log(addNumbers("hi", "hello"));

// TASK 3

// Write a simple arrow function that squares a number.

const squareNumber = (n) => {
  if (typeof n !== "number") {
    return "Invalid. Input should be a number";
  }
  return n * n;
};

// to check our work
console.log(squareNumber(9));
console.log(squareNumber("hi"));

// TASK 4
// [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.

const arraySquared = (array) => {
  const newArray = [];
  if (!Array.isArray(array)) {
    return "Invalid. Input should be an array";
  }
  for (let i = 0; i < array.length; i++) {
    newArray[i] = array[i] * array[i];
  }
  return newArray;
};

// to check our work
console.log(arraySquared([2, 4, 6, 8]));
console.log(arraySquared("hello"));
