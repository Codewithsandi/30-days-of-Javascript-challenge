export let person = {
  name: "Sandipan",
  age: 24,
  address: "Basirhat",
  greet: function(){
    return `Hello everyone I am ${this.name}, form ${this.address}.`
  }
};
