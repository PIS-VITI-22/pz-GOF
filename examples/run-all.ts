import { Database } from "../src/creational/singleton";
import { RoadLogistics, SeaLogistics } from "../src/creational/factory-method";
import { PrinterAdapter } from "../src/structural/adapter";
import { SmartHomeFacade } from "../src/structural/facade";
import { ShoppingCart, PayPalStrategy, CryptoStrategy } from "../src/behavioral/strategy";

console.log("--- Creational: Singleton ---");
const db1 = Database.getInstance();
const db2 = Database.getInstance();
db1.query("SELECT * FROM users");
console.log("Чи це один і той самий об'єкт?", db1 === db2);


console.log("\n--- Creational: Factory Method ---");
const road = new RoadLogistics();
console.log(road.planDelivery());


console.log("\n--- Structural: Adapter ---");
const printer = new PrinterAdapter();
printer.print("Адаптований друк");


console.log("\n--- Structural: Facade ---");
const home = new SmartHomeFacade();
home.watchMovie();


console.log("\n--- Behavioral: Strategy ---");
const cart = new ShoppingCart();
cart.setStrategy(new PayPalStrategy());
cart.checkout(150);
cart.setStrategy(new CryptoStrategy());
cart.checkout(500);