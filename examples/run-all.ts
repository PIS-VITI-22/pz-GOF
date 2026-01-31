// examples/run-all.ts
import { InventoryRegistry } from '../src/creational/singleton/InventoryRegistry';
import { UniformFactory, ArmorFactory } from '../src/creational/factory-method/EquipmentFactory';
import { OldPaperLog, PaperToDigitalAdapter } from '../src/structural/adapter/LegacySystemAdapter';
import { SupplyFacade } from '../src/structural/facade/SupplyIssueFacade';
import { SupplyWarehouse, CommanderObserver } from '../src/behavioral/observer/SupplyObserver';

console.log("=== ЗАПУСК ДИПЛОМНОГО ПРОЄКТУ (Облік майна) ===\n");

// 1. SINGLETON
console.log("--- 1. SINGLETON (Реєстр) ---");
const registry = InventoryRegistry.getInstance();
registry.addItem("Сухпай (добовий)", 500);

// 2. FACTORY METHOD
console.log("\n--- 2. FACTORY METHOD (Виробництво) ---");
const armorFactory = new ArmorFactory();
armorFactory.issueSupply(6); // Бронежилет 6 класу

// 3. ADAPTER
console.log("\n--- 3. ADAPTER (Сумісність) ---");
const adapter = new PaperToDigitalAdapter(new OldPaperLog());
adapter.addDigitalRecord("Шолом-TOR", "ВИДАНО");

// 4. FACADE
console.log("\n--- 4. FACADE (Проста видача) ---");
const facade = new SupplyFacade();
facade.issueEquipment("Курсант Гур'янов", "Планшет Samsung");

// 5. OBSERVER
console.log("--- 5. OBSERVER (Сповіщення) ---");
const warehouse = new SupplyWarehouse();
const commander = new CommanderObserver("Майор Петренко");
warehouse.addObserver(commander); // Командир підписався на оновлення
warehouse.addIncomingSupply("Партія дронів Mavic 3");