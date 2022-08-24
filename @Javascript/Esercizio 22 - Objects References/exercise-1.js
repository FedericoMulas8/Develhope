const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  job: 'Web Developer',
  fullName () {
    return person.firstName + ' ' + person.lastName;
  },
  info () {
    return `${this.fullName()}, ${this.age} - ${this.job}`;
  }
}

console.log(person.fullName()); // John Doe
console.log(person.info()); // John Doe, 25 - Web Developer

/* Creare all'interno dell'oggetto `person` 
i metodi: `fullName()` e `info()`, i quali utilizzano le proprietà 
dell'oggetto per stampare rispettivamente il nome completo 
e le informazioni anagrafiche comprensive di posizione lavorativa
*/