const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

/*
function fetchPersonById(id) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const person = persons.find(person => person.id === id);
      resolve(person);
      reject(new Error(`ID:${id} doesn't exist`));
  }, 1000)
    })
}
*/

function fetchPersonById(id) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const person = persons.find(person => person.id === id);
      if (person) {
        return resolve(person);
    } else return reject(new Error(`ID:${id} doesn't exist`))
  }, 1000)
    })
}

function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout( () => {
      const job = jobs.find(job => job.id === id)
      if (job) {
        return resolve(job)
      } else {
        return reject(new Error(`ID:${id} doesn't exist`))
      }
    }, 500);
  });
};

personPromise = fetchPersonById(1)
jobPromise = fetchJobById(1)
promises = [personPromise, jobPromise]

Promise.race(promises).then((value) => console.log(value))

