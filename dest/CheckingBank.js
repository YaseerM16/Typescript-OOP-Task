"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckingAccount = void 0;
const account_1 = require("./account");
class CheckingAccount extends account_1.Account {
    constructor(accountNumber, balance, overdraftLimit) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }
    getOverdraftLimit() {
        return this.overdraftLimit;
    }
    withdraw(amount) {
        if (this.balance + this.overdraftLimit < amount) {
            throw new Error("Insufficient balance and overdraft limit");
        }
        super.withdraw(amount);
    }
}
exports.CheckingAccount = CheckingAccount;
