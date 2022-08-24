function sumUntil(maxValue) {
  let numero = 0;
  for (i = 1; i <= maxValue; i++) {
    numero += i;
  }
  return numero;
}

console.log(sumUntil(5));

