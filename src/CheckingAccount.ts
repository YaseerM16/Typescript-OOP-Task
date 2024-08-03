import { Account } from './Account';

export class CheckingAccount extends Account {
  private overdraftLimit: number;

  constructor(accountNumber: string, balance: number, overdraftLimit: number) {
    super(accountNumber, balance);
    this.overdraftLimit = overdraftLimit;
  }

  getOverdraftLimit(): number {
    return this.overdraftLimit;
  }

  withdraw(amount: number): void {
    if (this.balance + this.overdraftLimit < amount) {
      throw new Error("Insufficient balance and overdraft limit");
    }
    super.withdraw(amount);
  }
}