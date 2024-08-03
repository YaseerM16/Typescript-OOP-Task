import { Account } from './Account';

export class SavingsAccount extends Account {
  private interestRate: number;

  constructor(accountNumber: string, balance: number, interestRate: number) {
    super(accountNumber, balance);
    this.interestRate = interestRate;
  }

  getInterestRate(): number {
    return this.interestRate;
  }

  addInterest(): void {
    this.deposit(this.balance * this.interestRate);
  }
}