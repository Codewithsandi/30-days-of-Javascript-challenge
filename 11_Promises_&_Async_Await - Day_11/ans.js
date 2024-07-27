//? Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

// let promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("async task 1 complete");
//   }, 2000);
// });

// promiseOne.then((message) => {
//   console.log(message);
//   console.log("PromiseOne Consumed.");
// });

//? Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().

// let promiseTwo = new Promise(function (resolve, reject) {
//   let status = true;
//   if (status) {
//     setTimeout(() => {
//       resolve("async task 2 complete");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("async task 2 failed");
//     }, 2000);
//   }
// });

// promiseTwo
//   .then((message) => {
//     console.log(message);
//     console.log("promiseTwo Consumed.");
//   })
//   .catch((message) => {
//     console.log(message);
//   });

//? Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

// function fetchData(message, delay) {
//   return new Promise((resolve, reject) => {
//     let stat = true;
//     if (stat) {
//       setTimeout(() => {
//         resolve(message);
//       }, delay);
//     } else {
//       reject("async task failed");
//     }
//   });
// }

// fetchData("Fetching data from server...", 1000)
//   .then((message) => {
//     console.log(message);
//     return fetchData("Processing data...", 2000);
//   })
//   .then((message) => {
//     console.log(message);
//     return fetchData("Data processed successfully!", 1500);
//   })
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//? Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

// let promiseThree = new Promise((resolve, reject) => {
//   let status = true;
//   if (status) {
//     resolve("async task 3 complete");
//   } else {
//     reject("Error");
//   }
// });

// async function consumeThree() {
//   try {
//     const response = await promiseThree;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumeThree();

//? Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

// let promiseFour = new Promise((resolve, reject) => {
//   let status = true;
//   if (status) {
//     resolve("async task 3 complete");
//   } else {
//     reject("Error");
//   }
// });

// async function consumeFour() {
//   try {
//     const response = await promiseFour;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumeFour();

//? Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => {
//     return data.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//? Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
// async function getAllUsers() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data = await response.json();
//     if (!response.ok) {
//       throw new Error("Network response was not ok " + response.statusText);
//     }
//     console.log(data);
//   } catch (error) {
//     console.log("ERROR Message: ", error);
//   }
// }

// getAllUsers();

//? Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

// function promiseData(message, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(message);
//       resolve(delay);
//     }, delay * 100);
//   });
// }

// let p1 = promiseData("first", 10);
// let p2 = promiseData("second", 20);
// let p3 = promiseData("third", 30);

// Promise.all([p1, p2, p3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//? Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.

const promiseA = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise A resolved"), 1000);
});

const promiseB = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise B rejected"), 2000);
});

const promiseC = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise C resolved"), 3000);
});

Promise.race([promiseA, promiseB, promiseC])
  .then((value) => {
    console.log("First promise resolved:", value); // Logs "Promise A resolved" after 1 second
  })
  .catch((error) => {
    console.log("First promise rejected:", error);
  });
