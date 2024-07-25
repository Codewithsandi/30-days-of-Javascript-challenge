//? Task 1: Write a program to print numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++) {
  // console.log(i);
}

//? Task 2: Write a program to print the multiplication table of 5 using a for loop.

let num = 5;
// console.log("Table of 5: ");
for (let i = 1; i <= 10; i++) {
  // console.log(num + " X " + i + " = " + num*i);
}

//? Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
// console.log(sum);

//? Task 4: Write a program to print numbers from 10 to 1 using a while loop.

let num1 = 10;

while (num1 > 0) {
  // console.log(num1);
  num1--;
}

//? Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.

let num2 = 1;

do {
  // console.log(num2);
  num2++;
} while (num2 <= 5);

//? Task 6: Write a program to calculate the factorial of a number using a do...while loop.

function factorial(num) {
  if (num == 0 || num == 1) {
    return 1;
  }

  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}

console.log(factorial(4));

//? Task 7: Write a program to print a pattern using nested for loops:
// *
// **
// ***
// ****
// *****

for (let i = 0; i < 5; i++) {
  let stars = "";
  for (let j = 0; j <= i; j++) {
    stars += "* ";
  }
  //   console.log(stars);
}

//? Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

let num3 = 1;

while (num3 <= 10) {
  if (num3 == 5) {
    num3++;
    continue;
  }
  //   console.log(num3);
  num3++;
}

//? Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

let num4 = 1;

while (num4 <= 10) {
  if (num4 == 7) {
    break;
  }
//   console.log(num4);
  num4++;
}
