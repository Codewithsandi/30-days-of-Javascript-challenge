//? Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function sayName() {
  let name = "Sandipan";

  function myName() {
    console.log(name);
  }
  return myName;
}

let nameFunction = sayName();
nameFunction();

//? Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

function createCounter() {
  // Private variable
  let counter = 0;

  return {
    // Function to increment the counter
    increment: function () {
      counter++;
    },

    // Function to get the current value of the counter
    getValue: function () {
      return counter;
    },
  };
}

const myCounter = createCounter();

myCounter.increment();
myCounter.increment();
console.log(myCounter.getValue()); // Output: 2

myCounter.increment();
console.log(myCounter.getValue()); // Output: 3

//? Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function createUniqueIdGenerator() {
  // Private variable to keep track of the last generated ID
  let lastId = 0;

  return function () {
    // Increment the last ID and return it
    lastId++;
    return lastId;
  };
}

const generateId = createUniqueIdGenerator();

console.log(generateId()); // Output: 1
console.log(generateId()); // Output: 2
console.log(generateId()); // Output: 3

//? Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

function createGreeting(name) {
  // The 'name' variable is captured by the closure

  return function () {
    // This function uses the captured 'name' variable
    console.log(`Hello, ${name}!`);
  };
}

const greetSandi = createGreeting("Sandi");
greetSandi(); // Output: Hello, Sandi!

const greetJohn = createGreeting("John");
greetJohn(); // Output: Hello, John!

//? Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

function createFunctionArray() {
  const functions = [];

  for (let i = 0; i < 5; i++) {
    // Create a closure that captures the current value of 'i'
    functions.push(
      (function (index) {
        return function () {
          console.log(index);
        };
      })(i)
    );
  }

  return functions;
}

const functionArray = createFunctionArray();

functionArray[0](); // Output: 0
functionArray[1](); // Output: 1
functionArray[2](); // Output: 2
functionArray[3](); // Output: 3
functionArray[4](); // Output: 4

//? Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

function createItemManager() {
  // Private array to store the items
  let items = [];

  return {
    // Method to add an item
    addItem: function (item) {
      items.push(item);
      console.log(`${item} added.`);
    },

    // Method to remove an item
    removeItem: function (item) {
      const index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
        console.log(`${item} removed.`);
      } else {
        console.log(`${item} not found.`);
      }
    },

    // Method to list all items
    listItems: function () {
      if (items.length > 0) {
        console.log("Items in the collection:");
        items.forEach((item, index) => {
          console.log(`${index + 1}. ${item}`);
        });
      } else {
        console.log("No items in the collection.");
      }
    },
  };
}

const itemManager = createItemManager();

itemManager.addItem("Book");
itemManager.addItem("Pen");
itemManager.listItems();
// Output:
// Items in the collection:
// 1. Book
// 2. Pen

itemManager.removeItem("Pen");
itemManager.listItems();
// Output:
// Items in the collection:
// 1. Book

itemManager.removeItem("Notebook");
// Output: Notebook not found.

//? Task7: Write a function that memoízes the results of another function. Use a closure to store the results of previous computations.

function memoize(fn) {
  // Create a cache object to store results
  const cache = {};

  return function (...args) {
    // Create a unique key based on the arguments
    const key = JSON.stringify(args);

    // If the result is already in the cache, return it
    if (cache[key]) {
      console.log("Fetching from cache:", key);
      return cache[key];
    }

    // Otherwise, call the original function and store the result in the cache
    console.log("Calculating result for:", key);
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// Example usage with a slow function (e.g., a recursive Fibonacci function)
function slowFibonacci(n) {
  if (n <= 1) return n;
  return slowFibonacci(n - 1) + slowFibonacci(n - 2);
}

// Memoize the slow Fibonacci function
const memoizedFibonacci = memoize(slowFibonacci);

console.log(memoizedFibonacci(10)); // Calculates and outputs the result
console.log(memoizedFibonacci(10)); // Fetches the result from cache
console.log(memoizedFibonacci(15)); // Calculates and outputs the result
console.log(memoizedFibonacci(15)); // Fetches the result from cache

//? Task 8: Create a memoized version of a function that calculates the factorial of a number.

function memoize(fn) {
  // Create a cache object to store results
  const cache = {};

  return function (...args) {
    // Create a unique key based on the arguments
    const key = JSON.stringify(args);

    // If the result is already in the cache, return it
    if (cache[key]) {
      console.log("Fetching from cache:", key);
      return cache[key];
    }

    // Otherwise, call the original function and store the result in the cache
    console.log("Calculating result for:", key);
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// Function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Memoize the factorial function
const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); // Calculates and outputs 120
console.log(memoizedFactorial(5)); // Fetches the result from cache (120)
console.log(memoizedFactorial(6)); // Calculates and outputs 720 (uses cached result for 5)
console.log(memoizedFactorial(6)); // Fetches the result from cache (720)
