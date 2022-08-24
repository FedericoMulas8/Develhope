const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

//metodo 1
const json = Object.entries(person).filter(([key, value]) => typeof value === 'number')

//metodo 2
const json = JSON.stringify(person, ['id', 'age']); 

console.log(json); // Should return: { id: 1, age: 25 }
