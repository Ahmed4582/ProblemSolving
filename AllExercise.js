// Exercise 1
// =>  Filtering an Array
// Problem: Write a function that takes an array of numbers
// and returns a new array containing only the even
// numbers.

function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}
const userInput = prompt("Please enter array of numbers");
const arr = userInput.split(" ").map(Number);

console.log(filterEvenNumbers(arr));

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Exercise 2
// => Find the Largest Number
// Problem: Write a function that takes an array of numbers
// and returns the largest number in the array.

const userInput2 = prompt("Please enter array of numbers");
const arr2 = userInput2.split(" ").map(Number);
const MaxNumber = Math.max(...arr2);
console.log(MaxNumber);

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Exercise 3
// Reverse a String
// Problem: Write a function that takes a string as input and
// returns the same string but reversed.

const userInput3 = prompt("Please enter array of numbers");
const arr3 = userInput3.split(" ").map(Number);
const ReverseArray = arr3.reverse();
console.log(ReverseArray);

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Exercise 4
// Remove Duplicates
// Problem: Write a function that takes an array of numbers
// and returns a new array without duplicate numbers.

const userInput4 = prompt("Please enter array of numbers");
const arr4 = userInput3.split(" ").map(Number);
const RemoveDuplicate = [...new Set(arr4)];
console.log(RemoveDuplicate);
