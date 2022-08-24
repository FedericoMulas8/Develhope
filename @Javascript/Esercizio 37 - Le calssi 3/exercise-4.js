class BankAccount {
    constructor(profile) {
        this._profile = profile;
    }

    deposit(cifra) {
        this._profile += cifra;
    }

    withdraw(cifra) {
        this._profile -= cifra;
    }

    view() {
        console.log(`Il tuo saldo è di: ${this._profile}€`)
    }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();
