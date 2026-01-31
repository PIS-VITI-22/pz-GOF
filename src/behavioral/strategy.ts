interface PaymentStrategy { pay(amount: number): void; }

export class PayPalStrategy implements PaymentStrategy {
    pay = (amount: number) => console.log(`Оплачено ${amount} через PayPal`);
}

export class CryptoStrategy implements PaymentStrategy {
    pay = (amount: number) => console.log(`Оплачено ${amount} через Crypto`);
}

export class ShoppingCart {
    private strategy!: PaymentStrategy;
    public setStrategy(s: PaymentStrategy) { this.strategy = s; }
    public checkout(amount: number) { this.strategy.pay(amount); }
}