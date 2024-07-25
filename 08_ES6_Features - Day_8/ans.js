//? Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

let name = "Sandipan";
let age = 24;

let string_value = `Good morning ${name}.Today is your brithday. Now you are ${24} years old.`;

// console.log(string_value);

//? Task 2: Create a multi-line string using template literals and log it to the console.

let multi_line = `
    HI i am Sandipan Kundu
    I am from basirhat
`;
// console.log(multi_line);

//? Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

let numbers = [1, 2, 3, 4];

let [a, b] = numbers;

// console.log(a, b);

//? Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

let book = {
  title: "Quantative Aptitude",
  author: "DR. RS Aggarwal",
  year: 2000,
};

let { title, author } = book;

// console.log(title, "\n", author);

//? Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

let newNumbers = [...numbers, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// console.log(newNumbers);

//? Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// console.log(sum(1, 2, 3, 4));

//? Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function product(a, b = 1) {
  return a * b;
}

// console.log(product(5));

//? Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const person = {
    name : "Sandipan",
    sayHello() {
        console.log("Hi I am a developer.");
    }
}

// console.log(person);

//? Task 9: Create an object with computed property names based on variables and log the object to the console.

const propName = "name";

let data = {
    [propName] : "Sandi",
    birth_date: 14
}

console.log(data);