//? Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

// function throwErrorFunction() {
//   throw new Error("This is an intentional error.");
// }

// try {
//   throwErrorFunction();
// } catch (error) {
//   console.log("An error occurred: " + error.message);
// }

//? Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

// function divides(num1, num2) {
//   if (num2 === 0) {
//     throw new Error("Denominator is zero. Division by zero is not allowed.");
//   } else {
//     console.log(num1 / num2);
//   }
// }

// try {
//   divides(20, 0);
// } catch (error) {
//   console.log("ERROR: " + error.message);
// }

//? Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

// function testFunction() {
//   try {
//     console.log("I the try block.");
//     throw new Error("This is an intentional error.");
//   } catch (error) {
//     console.log("I the catch block: " + error.message);
//   } finally {
//     console.log("I the finally block.");
//   }
// }

// testFunction();

//? Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

// class CustomError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = message;
//   }
// }

// function testCustomError() {
//   throw new CustomError("This is a custom error message.");
// }

// try {
//   testCustomError();
// } catch (error) {
//   if (error instanceof CustomError) {
//     console.log("Caught a custom error: " + error.message);
//   } else {
//     console.log("Caught an unexpected error: " + error.message);
//   }
// }

//? Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

// let input = document.querySelector("#validate");
// document.querySelector("form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   try {
//     if (input.value == "") {
//       throw new Error("input field was empty.");
//     } else {
//       console.log(input.value);
//     }
//   } catch (error) {
//     console.log("Custom Error: " + error.message);
//   }
// });

//? Task 6: Create a promise that randomly resolves or rejects. Use catch() to handle the rejection and log an appropriate message to the console.

// let p1 = new Promise((resolve, reject) => {
//   let isSuccess = Math.round(Math.random() * 10);
//   console.log(isSuccess);
//   if (isSuccess > 5) {
//     resolve("Promise resolved successfully.");
//   } else {
//     reject("Promise was rejected.");
//   }
// });

// p1.then((val) => {
//   console.log(val);
// }).catch((err) => {
//   console.log("Caught an error: " + err);
// });

//? Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

// let p2 = new Promise((resolve, reject) => {
//   let isSuccess = Math.round(Math.random() * 10);
//   console.log(isSuccess);
//   if (isSuccess > 5) {
//     resolve("Promise resolved successfully.");
//   } else {
//     reject("Promise was rejected.");
//   }
// });

// async function task_7() {
//   try {
//     let response = await p2;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// task_7();

//? Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.

// fetch("https://jsonplaceholders.typicode.com/users")
//   .then((response) => {
//     if (!response.ok) {
//         throw new Error("Network response was not ok: " + response.statusText)
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   }).catch((err)=>{
//     console.log(err);
//   })

//? Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function task_9() {
  try {
    let response = await fetch("https://jsonplaceholders.typicode.com/users");
    if (!response.ok) {
      throw new Error("Network response was not ok: " + response.statusText);
    }
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

task_9();
