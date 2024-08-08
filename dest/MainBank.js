"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
const CheckingAccount_1 = require("./CheckingAccount");
const SavingAccount_1 = require("./SavingAccount");
class Bank {
    constructor() {
        this.accounts = {};
    }
    createAccount(accountNumber, balance, type, ...args) {
        let account;
        switch (type) {
            case 'checking':
                account = new CheckingAccount_1.CheckingAccount(accountNumber, balance, args[0]);
                break;
            case 'savings':
                account = new SavingAccount_1.SavingsAccount(accountNumber, balance, args[0]);
                break;
            default:
                throw new Error("Invalid account type");
        }
        this.accounts[accountNumber] = account;
    }
    getAccount(accountNumber) {
        return this.accounts[accountNumber];
    }
    deposit(accountNumber, amount) {
        const account = this.getAccount(accountNumber);
        if (!account) {
            throw new Error("Account not found");
        }
        account.deposit(amount);
    }
    withdraw(accountNumber, amount) {
        const account = this.getAccount(accountNumber);
        if (!account) {
            throw new Error("Account not found");
        }
        account.withdraw(amount);
    }
    getBalance(accountNumber) {
        const account = this.getAccount(accountNumber);
        if (!account) {
            throw new Error("Account not found");
        }
        return account.getBalance();
    }
}
exports.Bank = Bank;
// module.exports = Bank
