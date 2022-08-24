class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

    deposit(amount) {
      if(amount < 0) {
        console.log(Error('amount negativo'))
      } else {
      this.#amount += amount;
    }
  }
  

  withdraw(amount) {
    // throw an exception if amount is negative or if withdrawal amount is greater than current amount
    if (amount < 0 || amount > this.#amount) {
       console.log(Error('amount negativo o superiore alla cifra'))
    } else {
    this.#amount -= amount;
  }
}

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();

/*
# Error handling - Exercise 1
Implementare all'interno della classe `BankAccount` un controllo sui metodi `deposit` e `withdraw`.
Entrambi i metodi devono poter lanciare un errore qualora venisse passato un `amount` negativo.
Il metodo `withdraw` deve poter lanciare un errore anche qualora venisse passato un `amount` superiore rispetto al totale presente sul conto corrente.
*/