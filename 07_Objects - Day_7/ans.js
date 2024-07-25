//? Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

let book = {
  title: "Quantative Aptitude",
  author: "DR. RS Aggarwal",
  year: 2000,
  greet: function () {
    return `${this.title} this is a very good book. Written by ${this.author}`;
  },
  update_year: function (newYear) {
    return (this.year = newYear);
  },
  get_title_author: function () {
    return `${this.title} this is a very good book. Written year is ${this.year}`;
  }
};

book.library = {
  name: "Indian Library",
  books: [
    {
      title: book.title,
      author: book.author,
      year: book.year,
      greet: book.greet,
      update_year: book.update_year,
    },
  ],
};

// console.log(book);

//? Task 2: Access and log the title and author properties of the book object.

// console.log(book.title);
// console.log(book.author);

//? Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

// console.log(book.greet());

//? Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

// console.log(book.update_year(5000));

//? Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

// console.log(book.library);

//? Task 6: Access and log the name of the library and the titles of all the books in the library.

// console.log(book.library.name);
book.library.books.forEach(item => {
    // console.log(item.title);
});

//? Task 7: Add a method to the book object that uses the 'this' keyword to return a string with the book's title and year, and log the result of calling this method.

// console.log(book.get_title_author());

//? Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

for (const key in book) {
    // console.log(key," : ", book[key]);
}

//? Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

console.log((Object.keys(book)));
console.log((Object.values(book)));