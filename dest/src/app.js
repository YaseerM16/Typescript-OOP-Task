"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const MainBank_1 = require("./MainBank");
const app = (0, express_1.default)();
const bank = new MainBank_1.Bank();
console.log(MainBank_1.Bank);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', './views');
app.get('/', (req, res) => {
    res.render('index', { message: "Welcome to Our Bank !!" });
});
// app.get('/', (req: Request, res: Response) => {
//   res.render('create-account', { title: 'Create Account' });
// });
app.post('/create-account', (req, res) => {
    const _a = req.body, { accountNumber, balance, type } = _a, args = __rest(_a, ["accountNumber", "balance", "type"]);
    bank.createAccount(accountNumber, balance, type, ...Object.values(args));
    res.json(`Account created: ${accountNumber}`);
});
app.post('/deposit', (req, res) => {
    const { accountNumber, amount } = req.body;
    bank.deposit(accountNumber, amount);
    res.json({ accountNo: accountNumber, amount: amount });
});
app.post('/withdraw', (req, res) => {
    const { accountNumber, amount } = req.body;
    bank.withdraw(accountNumber, amount);
    res.json({ accountNo: accountNumber, amount: amount });
});
app.get('/check-balance', (req, res) => {
    const { accountNumber } = req.query;
    const balance = bank.getBalance(accountNumber);
    res.json({ Balance: balance });
});
app.listen(5000, () => {
    console.log('Server started on port 5000');
});
