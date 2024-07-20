//? Task 1: Write a function to check if a number is even or odd and log the result to the console.

function check_odd_even(number) {
  if (number % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

// check_odd_even(5);
// check_odd_even(6);

//? Task 2: Write a function to calculate the square of a number and return the result.

function square(number) {
  return number * number;
}

// console.log(square(5));

//? Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

function maximum(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}

// maximum(50,80)

//? Task 4: Write a function expression to concatenate two strings and return the result.

function greeting(name) {
  return "I am " + name;
}

// console.log(greeting("Sandipan"));

//? Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

const sum_of_two = (num1, num2) => {
  return num1 + num2;
};

// console.log(sum_of_two(10,70));

//? Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const contains_a_specific_character = (data) => {
  let character = "x";
  if (data.includes(character)) {
    return true;
  } else {
    return false;
  }
};

// console.log(contains_a_specific_character("Sandipan"));

//? Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

const product_of_two = (num1, num2 = 10) => {
  return num1 * num2;
};

// console.log(product_of_two(20));

//? Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

let greet = (name, age = 20) => {
  console.log(
    "Good Morning " + " " + name + " Now you are " + age + " years old."
  );
};

// greet("Sandipan")

//? Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

let higher_order_fnc_1 = (number, cb) => {
  let name = "Sandi";
  while (number > 0) {
    cb(name);
    number--;
  }
};

// higher_order(5, (res) => console.log(res));

//? Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

let higher_order_fnc_2 = (value, cb1,cb2) => {
    let res = cb1(value);
    cb2(res);
}

higher_order_fnc_2("Sandipan Kundu", res => res,(val) => console.log(val));
