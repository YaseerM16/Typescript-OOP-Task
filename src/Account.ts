export class Account {
  private accountNumber: string;
  protected balance: number;

  constructor(accountNumber: string, balance: number) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  getAccountNumber(): string {
    return this.accountNumber;
  }

  getBalance(): number {
    return this.balance;
  }

  deposit(amount: number): void {
    this.balance = Number(this.balance) + amount;
  }

  withdraw(amount: number): void {
    if (this.balance < amount) {
      throw new Error("Insufficient balance");
    }
    this.balance = Number(this.balance) - amount;
  }
}