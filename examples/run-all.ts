import { Database } from "../src/creational/Singleton";
import { WindowsDialog } from "../src/creational/FactoryMethod";
import { ComputerFacade } from "../src/structural/Facade";
import { ScannerAdapter } from "../src/structural/Adapter";
import { SortedList, AlphabeticalSort } from "../src/behavioral/Strategy";

console.log("--- 1. Тест Singleton ---");
const db = Database.getInstance();
db.query("SELECT * FROM users");
console.log("Один об'єкт?", Database.getInstance() === db);

console.log("\n--- 2. Тест Factory Method ---");
const dialog = new WindowsDialog();
dialog.renderWindow();

console.log("\n--- 3. Тест Facade ---");
const computer = new ComputerFacade();
computer.start();

console.log("\n--- 4. Тест Adapter ---");
// Тут ми імітуємо старий сканер, який не підходить до нового інтерфейсу
const adapter = new ScannerAdapter(new (class { legacyScan() { return "Старі дані"; } })());
console.log(adapter.scan());

console.log("\n--- 5. Тест Strategy ---");
const list = new SortedList(new AlphabeticalSort());
list.processList(["Яблуко", "Банан", "Апельсин"]);