const ceo = 2200;
const manager = 1800;
const cto = 1800;
const developer = 1500;

function calculateSalary(role) {
  if (role === ceo) {
    return ceo + '€';
  }
}

const ceoSalary = calculateSalary(ceo);
// const managerSalary = calculateSalary('manager');
// const ctoSalary = calculateSalary('cto');
// const developerSalary = calculateSalary('developer');
// const otherSalary = calculateSalary('other');

console.log(ceoSalary);
// console.log(managerSalary);
// console.log(ctoSalary);
// console.log(developerSalary);
// console.log(otherSalary);