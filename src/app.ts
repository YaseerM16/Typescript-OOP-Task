import express from 'express';
import { Request, Response } from 'express-serve-static-core';
import { Bank } from './MainBank';

const app = express();
const bank = new Bank();
console.log(Bank);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req: Request, res: Response) => {
  res.render('index', { message: "Welcome to Our Bank !!" });
});
// app.get('/', (req: Request, res: Response) => {
//   res.render('create-account', { title: 'Create Account' });
// });

app.post('/create-account', (req: Request, res: Response) => {
  const { accountNumber, balance, type, ...args } = req.body;
  bank.createAccount(accountNumber, balance, type, ...Object.values(args));
  res.json(`Account created: ${accountNumber}`);
});

app.post('/deposit', (req: Request, res: Response) => {
  const { accountNumber, amount } = req.body;
  bank.deposit(accountNumber, amount);
  res.json({ accountNo: accountNumber, amount: amount })
});

app.post('/withdraw', (req: Request, res: Response) => {
  const { accountNumber, amount } = req.body;
  bank.withdraw(accountNumber, amount);
  res.json({ accountNo: accountNumber, amount: amount })
});

app.get('/check-balance', (req: Request, res: Response) => {
  const { accountNumber } = req.query;
  const balance = bank.getBalance(accountNumber as string);
  res.json({ Balance: balance });
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});