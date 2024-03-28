class BankAccount {
    static bankName = 'BankBank';
    
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        console.log(`New account in ${BankAccount.bankName}`);
    }

    deposit = (amount) => {
        this.balance += amount;
        this.newBalance('Deposited', amount);
    }

    withdraw = (amount) => {
        if (this.balance - amount > 0) {
            this.balance -= amount;
            this.newBalance('Withdrawn', amount);
        }
        else
            console.log(`Недостаточно средств на счёте ${this.accountNumber}`);
    }

    newBalance = (operation, amount) => {
        console.log(`${operation} ${amount} into account ${this.accountNumber}`);
        console.log(`Total: ${this.balance}`);
    }
}

const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500); // Вывод: Deposited 500 into account 1234567890. New balance: 1500
account1.withdraw(200); // Вывод: Withdrawn 200 from account 1234567890. New balance: 1300
account1.withdraw(1500); // Вывод: Insufficient funds in account 1234567890
// console.log(BankAccount.bankName);