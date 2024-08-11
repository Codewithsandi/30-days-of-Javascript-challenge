//? Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

import { addTwoNum } from "./add_two_number.js";

// console.log(addTwoNum(13, 20));

//? Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

import { person } from "./person_details.js";

// console.log("My age is: " +person.age);
// console.log(person.greet());

//? Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

import { subtract_fnc, multiplication_fnc } from "./multiple_functions.js";

// console.log(subtract_fnc(50,10));
// console.log(multiplication_fnc(50,20));

//? Task 4: Create a module that exports a single function using default export. Import and use this function in another script.

import greet from "./default_export.js";

// console.log(greet());

//? Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

import * as multi_fnc from "./multiple_constants_and_functions.js";

// console.log(multi_fnc);
// console.log(multi_fnc.name);
// console.log(multi_fnc.sayHello());

//? Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.

import _ from "lodash";

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(_.chunk(numbers,3));
// console.log(_.last(numbers));
// console.log(_.reverse(numbers));

//? Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.

import axios from "axios";

async function getAllUsers() {
  try {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response.data);
  } catch (error) {
    console.log("ERROR Message: ", error);
  }
}

// getAllUsers();

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json()
//   })
//   .then((data) => {
//     console.log(data);
//   });

// axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
//   console.log(response.data);
// });

//? Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.
