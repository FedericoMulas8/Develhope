class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get Name() {
    return this.firstName;
  }

  get Surname() {
    return this.lastName;
  }

  get Years() {
    return this.age;
  }

  set Name(name) {
    return this.firstName = name;
  }

  set Surname(surname) {
    return this.lastName = surname
  }

  set Years(number) {
    return this.age = number;
  }

  get fullName() {
    return `${this.Name} ${this.Surname}`;
  }
}


const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);