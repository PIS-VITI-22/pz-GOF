import { Database } from "../src/creational/singleton/Database";
import { RoadLogistics } from "../src/creational/factory-method/Logistics";
import { PrinterAdapter } from "../src/structural/adapter/Adapter";
import { HomeTheaterFacade } from "../src/structural/facade/HomeTheater";
import { ShoppingCart, CreditCardPayment, PayPalPayment } from "../src/behavioral/strategy/Payment";

console.log("--- START GOF PATTERNS DEMO ---\n");

console.log("1. CREATIONAL: Singleton");
Database.getInstance().query("SELECT * FROM products");

console.log("\n2. CREATIONAL: Factory Method");
new RoadLogistics().planDelivery();

console.log("\n3. STRUCTURAL: Adapter");
new PrinterAdapter().print("Звіт за квартал");

console.log("\n4. STRUCTURAL: Facade");
new HomeTheaterFacade().watchMovie();

console.log("\n5. BEHAVIORAL: Strategy");
const cart = new ShoppingCart();
cart.setStrategy(new PayPalPayment());
cart.checkout(1200);
