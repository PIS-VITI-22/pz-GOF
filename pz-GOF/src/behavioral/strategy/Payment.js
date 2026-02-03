"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = exports.PayPalPayment = exports.CreditCardPayment = void 0;
class CreditCardPayment {
    pay(a) { console.log(`Оплачено ${a} грн. через Visa/Mastercard.`); }
}
exports.CreditCardPayment = CreditCardPayment;
class PayPalPayment {
    pay(a) { console.log(`Оплачено ${a} грн. через PayPal.`); }
}
exports.PayPalPayment = PayPalPayment;
class ShoppingCart {
    setStrategy(s) { this.strategy = s; }
    checkout(a) { this.strategy.pay(a); }
}
exports.ShoppingCart = ShoppingCart;
