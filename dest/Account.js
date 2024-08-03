"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    getAccountNumber() {
        return this.accountNumber;
    }
    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        this.balance = Number(this.balance) + amount;
    }
    withdraw(amount) {
        if (this.balance < amount) {
            throw new Error("Insufficient balance");
        }
        this.balance = Number(this.balance) - amount;
    }
}
exports.Account = Account;
