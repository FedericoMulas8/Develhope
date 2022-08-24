function sum(...num) {
    let sum = 0;
    for (number of num ) {
        sum += number;
    }
    return sum
}

console.log(sum(1, 2, 3, 4, 5));

//metodo 2

function sum(...numbers) {
    return numbers.reduce((result, value) => result + value);
  }

console.log(sum(1, 2, 3, 4, 5));
//metodo 3

// function sum(x,y,z,a,b) {
//     return x+y+z+a+b;
// }

// const num = [1,2,3,4,5]

// console.log(sum(...num));