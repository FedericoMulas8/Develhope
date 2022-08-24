
function Person(firstName, lastName) {
  return {
    firstName,
    lastName,
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
}

let john = new Person('John', 'Doe');
let simon = new Person('Simon', 'Collins');

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins