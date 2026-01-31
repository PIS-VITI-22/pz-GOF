interface PaymentStrategy { pay(amount: number): void; }
export class CreditCardPayment implements PaymentStrategy {
    pay(a: number) { console.log(`Оплачено ${a} грн. через Visa/Mastercard.`); }
}
export class PayPalPayment implements PaymentStrategy {
    pay(a: number) { console.log(`Оплачено ${a} грн. через PayPal.`); }
}
export class ShoppingCart {
    private strategy!: PaymentStrategy;
    setStrategy(s: PaymentStrategy) { this.strategy = s; }
    checkout(a: number) { this.strategy.pay(a); }
}
