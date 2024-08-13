//? Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.

class Person {
  constructor(name, age, f_name, l_name) {
    this.name = name;
    this.age = age;
    this.f_name = f_name
    this.l_name = l_name
  }
  greeting() {
    return `Hi ${this.name} how are you?`;
  }

  //! task 2
  updateAge(newAge) {
    this.age = newAge;
    console.log(`My new age is: ${newAge}`);
  }

  //! task 5
  static generic_greeting() {
    console.log("I am a generic greeting message.");
  }

  //! task 7
  get f_name() {
    return this._f_name;
  }

  //! task 7
  get l_name(){
    return this._l_name;
  }

  //! task 8
  set f_name(value){
    this._f_name = value
  }

  //! task 8
  set l_name(value){
    this._l_name = value
  }

  get full_name(){
    return `${this.f_name} ${this.l_name}`
  }
}

const person = new Person("Sandipan", 24);

//* console.log(person.greeting());

//? Task 2: Add a method to the Person class that updates the age property and logs the updated age.
//* person.updateAge(30)

//? Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID.Create an instance of the Student class and log the student ID.

class Student extends Person {
  static studentCount = 0; //! task 6

  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;

    Student.studentCount++; //! task 6
  }
  rollNumber() {
    return `Student Id is: ${this.studentId}`;
  }

  //! task 4
  greeting() {
    return `${super.greeting()} Your roll number is: ${this.studentId}`;
  }

  //! task 6
  static logStudentCount() {
    console.log(`Total number of students: ${Student.studentCount}`);
  }
}

const student = new Student("Sursuri", 24, 1149);

//* console.log(student.rollNumber());

//? Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.

//* console.log(student.greeting());

//? Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

// Person.generic_greeting();

//? Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

const student2 = new Student("Sandi", 23, 1150);

Student.logStudentCount();

//? Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.

let full_name = new Person("Sami",20,"Samir","Kundu")

console.log(full_name.name);


//? Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.

let updated_name = new Person("Sami",20,"Samir","Kundu")
updated_name.f_name = "Rahul";
updated_name.l_name = "Sharma";
console.log(updated_name.full_name);


//? Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.



//? Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
