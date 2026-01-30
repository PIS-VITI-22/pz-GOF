/**
 * Adapter Pattern
 * Задача: Перетворити інтерфейс класу в інший, очікуваний клієнтом
 * Проблема: Несумісні інтерфейси між компонентами
 */

// Старий інтерфейс USB-A
interface OldUSBA {
  connectUSBA(): void;
  sendDataUSBA(data: string): void;
}

// Новий інтерфейс USB-C
interface NewUSBC {
  connectUSBC(): void;
  sendDataUSBC(data: string): void;
}

// Старий пристрій з інтерфейсом USB-A
class LegacyPrinter implements OldUSBA {
  connectUSBA(): void {
    console.log("🖨️  Підключаю старий принтер через USB-A...");
  }

  sendDataUSBA(data: string): void {
    console.log(`📄 Принтер отримав дані (USB-A): "${data}"`);
  }
}

// Новий пристрій з інтерфейсом USB-C
class ModernMonitor implements NewUSBC {
  connectUSBC(): void {
    console.log("🖥️  Підключаю сучасний монітор через USB-C...");
  }

  sendDataUSBC(data: string): void {
    console.log(`📺 Монітор отримав дані (USB-C): "${data}"`);
  }
}

// Адаптер - перетворює USB-A в USB-C
class USBAdapter implements NewUSBC {
  private legacyDevice: OldUSBA;

  constructor(legacyDevice: OldUSBA) {
    this.legacyDevice = legacyDevice;
  }

  connectUSBC(): void {
    console.log("🔌 Адаптер: перетворення USB-C -> USB-A");
    this.legacyDevice.connectUSBA();
  }

  sendDataUSBC(data: string): void {
    console.log(`🔌 Адаптер: трансляція даних USB-C -> USB-A`);
    this.legacyDevice.sendDataUSBA(data);
  }
}

// Функція, яка розраховує на USB-C інтерфейс
function useModernPort(device: NewUSBC, data: string): void {
  device.connectUSBC();
  device.sendDataUSBC(data);
}

// Приклад використання
export function demonstrateAdapter(): void {
  console.log("\n=== Adapter Pattern ===\n");

  const modernMonitor = new ModernMonitor();
  console.log("✓ Прямо підключаємо сучасний пристрій:\n");
  useModernPort(modernMonitor, "Привіт, монітор!");

  console.log("\n" + "=".repeat(50) + "\n");

  const legacyPrinter = new LegacyPrinter();
  const adapter = new USBAdapter(legacyPrinter);

  console.log("✓ Підключаємо старий пристрій через адаптер:\n");
  useModernPort(adapter, "Привіт, принтер!");

  console.log(
    "\n✅ Adapter дозволяє старим пристроям (USB-A) працювати з новим інтерфейсом (USB-C)\n"
  );
}
