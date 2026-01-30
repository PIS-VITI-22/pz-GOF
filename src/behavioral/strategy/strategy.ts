/**
 * Strategy Pattern
 * Задача: Визначити сімейство алгоритмів, інкапсулювати кожен і зробити їх взаємозамінними
 * Проблема: Багато умовних операторів для вибору різних алгоритмів
 */

// Інтерфейс стратегії платежу
interface PaymentStrategy {
  pay(amount: number): void;
}

// Конкретні стратегії платежу
class CreditCardPayment implements PaymentStrategy {
  private cardNumber: string;

  constructor(cardNumber: string) {
    this.cardNumber = cardNumber;
  }

  pay(amount: number): void {
    console.log(
      `💳 Платіж кредитною карткою ${this.cardNumber.slice(-4)} на суму: ${amount}₴`
    );
    console.log("   ✓ Платіж обробки...");
    console.log("   ✓ Платіж завершено");
  }
}

class PayPalPayment implements PaymentStrategy {
  private email: string;

  constructor(email: string) {
    this.email = email;
  }

  pay(amount: number): void {
    console.log(`🅿️  Платіж PayPal (${this.email}) на суму: ${amount}₴`);
    console.log("   ✓ Автентифікація...");
    console.log("   ✓ Платіж завершено");
  }
}

class CryptoCurrencyPayment implements PaymentStrategy {
  private walletAddress: string;

  constructor(walletAddress: string) {
    this.walletAddress = walletAddress;
  }

  pay(amount: number): void {
    console.log(`🪙 Платіж криптовалютою (гаманець: ${this.walletAddress.slice(-8)}) на суму: ${amount}₴`);
    console.log("   ✓ Підписування транзакції...");
    console.log("   ✓ Платіж в блокчейні...");
    console.log("   ✓ Платіж завершено");
  }
}

class BankTransferPayment implements PaymentStrategy {
  private accountNumber: string;

  constructor(accountNumber: string) {
    this.accountNumber = accountNumber;
  }

  pay(amount: number): void {
    console.log(
      `🏦 Банківський переказ (рахунок: ${this.accountNumber.slice(-4)}) на суму: ${amount}₴`
    );
    console.log("   ✓ Перевірка рахунку...");
    console.log("   ✓ Переказ обробляється...");
    console.log("   ✓ Платіж завершено");
  }
}

// Контекст - користувач, який чинить платіж
class ShoppingCart {
  private items: { name: string; price: number }[] = [];
  private paymentStrategy?: PaymentStrategy;

  addItem(name: string, price: number): void {
    this.items.push({ name, price });
    console.log(`✓ Додано до кошика: ${name} (${price}₴)`);
  }

  setPaymentMethod(strategy: PaymentStrategy): void {
    this.paymentStrategy = strategy;
  }

  checkout(): void {
    const total = this.items.reduce((sum, item) => sum + item.price, 0);
    console.log(`\n📦 Кошик (${this.items.length} товарів):`);
    this.items.forEach((item) => console.log(`   - ${item.name}: ${item.price}₴`));
    console.log(`💰 Загальна сума: ${total}₴\n`);

    if (!this.paymentStrategy) {
      console.log("❌ Метод оплати не обрано!");
      return;
    }

    this.paymentStrategy.pay(total);
  }
}

// Приклад використання
export function demonstrateStrategy(): void {
  console.log("\n=== Strategy Pattern ===\n");

  const cart = new ShoppingCart();
  cart.addItem("Ноутбук", 25000);
  cart.addItem("Мишка", 500);
  cart.addItem("Клавіатура", 1500);

  console.log("\n" + "=".repeat(50) + "\n");

  console.log("💳 Сценарій 1: Оплата кредитною карткою\n");
  cart.setPaymentMethod(new CreditCardPayment("4532-1234-5678-9010"));
  cart.checkout();

  console.log("\n" + "=".repeat(50) + "\n");

  console.log("🅿️  Сценарій 2: Оплата через PayPal\n");
  cart.setPaymentMethod(new PayPalPayment("user@example.com"));
  cart.checkout();

  console.log("\n" + "=".repeat(50) + "\n");

  console.log("🪙 Сценарій 3: Оплата криптовалютою\n");
  cart.setPaymentMethod(new CryptoCurrencyPayment("0xABC123DEF456"));
  cart.checkout();

  console.log("\n" + "=".repeat(50) + "\n");

  console.log("🏦 Сценарій 4: Банківський переказ\n");
  cart.setPaymentMethod(new BankTransferPayment("UA89305299001234567890"));
  cart.checkout();

  console.log(
    "\n✅ Strategy дозволяє вибирати алгоритм платежу під час виконання без змін в коді\n"
  );
}
