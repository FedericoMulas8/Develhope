const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

person2['firstName'] = 'Simon';
//person2.firstName = 'Simon'; (oppure)

/*
Viene modificato anche person1 perchè entrambe le variabili sono legate all'oggetto person1. 
Non è stata creata una vera e propria copia della variabile 1 ma una sorta di riferimento ad essa.
Entrambe le variabili "puntano" allo stesso dato, e infatti anche provando a cambiare person1, varierebbe anche person2.
*/


console.log(person1);
console.log(person2);