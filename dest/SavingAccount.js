"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingsAccount = void 0;
const Account_1 = require("./Account");
class SavingsAccount extends Account_1.Account {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
    getInterestRate() {
        return this.interestRate;
    }
    addInterest() {
        this.deposit(this.balance * this.interestRate);
    }
}
exports.SavingsAccount = SavingsAccount;
