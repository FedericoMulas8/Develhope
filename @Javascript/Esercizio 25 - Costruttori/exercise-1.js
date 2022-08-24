const person = {
  get firstName() {
    return this._firstName;
  },
  set firstName(first) {
    this._firstName = first;
  },
  get lastName() {
    return this._lastName;
  },
  set lastName(last) {
    this._lastName = last;
  },
  fullName() {
    return `${this._firstName} ${this._lastName}`;
  },
};


const john = Object.create(person);
john._firstName = 'John';
john._lastName = 'Doe';

const simon = Object.create(person);
simon._firstName = 'Simon';
simon._lastName = 'Collins';


console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins



