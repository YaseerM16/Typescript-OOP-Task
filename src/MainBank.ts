import { Account } from "./Account";
import { CheckingAccount } from "./CheckingAccount";
import { SavingsAccount } from "./SavingAccount";

export class Bank {
  private accounts: { [id: string]: Account };

  constructor() {
    this.accounts = {};
  }

  createAccount(accountNumber: string, balance: number, type: string, ...args: any[]): void {
    let account: Account;
    switch (type) {
      case 'checking':
        account = new CheckingAccount(accountNumber, balance, args[0]);
        break;
      case 'savings':
        account = new SavingsAccount(accountNumber, balance, args[0]);
        break;
      default:
        throw new Error("Invalid account type");
    }
    this.accounts[accountNumber] = account;
  }

  getAccount(accountNumber: string): Account {
    return this.accounts[accountNumber];
  }

  deposit(accountNumber: string, amount: number): void {
    const account = this.getAccount(accountNumber);
    if (!account) {
      throw new Error("Account not found");
    }
    account.deposit(amount);
  }

  withdraw(accountNumber: string, amount: number): void {
    const account = this.getAccount(accountNumber);
    if (!account) {
      throw new Error("Account not found");
    }
    account.withdraw(amount);
  }

  getBalance(accountNumber: string): number {
    const account = this.getAccount(accountNumber);
    if (!account) {
      throw new Error("Account not found");
    }
    return account.getBalance();
  }
}

// module.exports = Bank
