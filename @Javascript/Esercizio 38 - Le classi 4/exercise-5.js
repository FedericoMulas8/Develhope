class BankAccount {
  _amount = 0;

  constructor(initialAmount) {
    this._amount = initialAmount;
  }

  deposit(amount) {
    this._amount += amount;
  }

  withdraw(amount) {
    this._amount -= amount;
  }

  view() {
    console.log(this._amount);
  }
}

class BankAccountVip extends BankAccount {
  constructor(initialAmount) {
    super(initialAmount)
  }

  deposit(amount) {
    if (amount >= 1000) {
      super.deposit(amount + (amount*3/100));
    } else {
      super.deposit(amount);
    }
  }

}



const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();
