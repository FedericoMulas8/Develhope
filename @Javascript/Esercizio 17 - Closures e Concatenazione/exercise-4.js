function calculate() {
  let calculator = {
    result: 0,
    add: function (x) {
      this.result += x;
      return this;
    },
    sub: function (x) {
      this.result -= x;
      return this;
    },
    multiply: function (x) {
      this.result *= x;
      return this;
    },
    divide: function (x) {
      this.result /= x;
      return this;
    },
    printResult: function () {
      return console.log(this.result);
    },
  };
  return calculator;
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7