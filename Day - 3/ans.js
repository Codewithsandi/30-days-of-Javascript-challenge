//? Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

let number = -5;

if (number > 0) {
  // console.log("Positive");
} else if (number < 0) {
  // console.log("Negative");
} else {
  // console.log("Zero");
}

//? Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age = 17;

if (age >= 18) {
  // console.log("person is eligible to vote");
} else {
  // console.log("person is not eligible to vote");
}

//? Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let num1 = 500;
let num2 = 10;
let num3 = 20;

if (num1 > num2) {
  if (num1 > num3) {
    // console.log(num1);
  } else {
    // console.log(num3);
  }
} else if (num2 > num3) {
  // console.log(num2);
} else {
  // console.log(num3);
}

//? Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let month = 2;

switch (month) {
  case 1:
    // console.log("Monday");
    break;
  case 2:
    // console.log("Tuesday");
    break;
  case 3:
    // console.log("Wednesday");
    break;
  case 4:
    // console.log("Thursday");
    break;
  case 5:
    // console.log("Friday");
    break;
  case 6:
    // console.log("Saturday");
    break;
  case 7:
    // console.log("Sunday");
    break;

  default:
    // console.log("404 not found.");
    break;
}

//? Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

let score = 100;

switch (true) {
  case score >= 90 && score <= 100:
    // console.log("grade: A");
    break;
  case score >= 70 && score < 90:
    // console.log("grade: B");
    break;
  case score >= 50 && score < 70:
    // console.log("grade: C");
    break;
  case score >= 30 && score < 50:
    // console.log("grade: D");
    break;
  case score >= 0 && score < 30:
    // console.log("grade: F");
    break;

  default:
    // console.log("Score must be 0 to 100");
    break;
}

//? Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let num = 6;

// console.log(num % 2 == 0 ? "even" : "odd");

//? Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let is_leap_year = 2000;

if (is_leap_year % 4 == 0) {
  if (is_leap_year % 100 == 0) {
    if (is_leap_year % 400 == 0) {
      console.log("Leap year");
    } else {
      console.log("Not Leap year");
    }
  } else {
    console.log("Leap year");
  }
} else {
  console.log("Not Leap year");
}
