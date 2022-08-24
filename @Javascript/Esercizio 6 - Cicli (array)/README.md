# Conditionals & Loops - Exercise 3
Implementare, tramite blocchi condizionali e cicli, la funzione `adultFilter`, la quale, dato un array di persone, filtra e restituisce soltanto coloro che sono maggiorenni

function adultFilter(persons) {
  let adults = [];
  for (i = 0; i < persons.length; i++) {
    if (persons[i].age >= 18) {
      adults.push(persons[i]);
    }
  }
  return adults;
}