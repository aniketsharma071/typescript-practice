class BankAccount {
    private balance = 0

    deposit(amount: number) {
        this.balance += amount
    }

    getBalance() {
        return this.balance
    }
}

let account = new BankAccount();
account.deposit(100);
console.log(account.getBalance());