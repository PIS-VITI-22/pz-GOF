/**
 * Builder Pattern
 * Задача: Розділити конструювання складного об'єкта від його представлення
 * Проблема: Об'єкт з багатьма параметрами важко створювати через конструктор
 */

// Клас, який треба конструювати
class House {
  walls?: string;
  roof?: string;
  windows?: number;
  door?: string;
  garage?: boolean;
  swimmingPool?: boolean;

  describe(): void {
    console.log("🏠 Структура будинку:");
    if (this.walls) console.log(`   - Стіни: ${this.walls}`);
    if (this.roof) console.log(`   - Дах: ${this.roof}`);
    if (this.windows) console.log(`   - Вікна: ${this.windows}`);
    if (this.door) console.log(`   - Двері: ${this.door}`);
    if (this.garage) console.log(`   - Гараж: ✓`);
    if (this.swimmingPool) console.log(`   - Басейн: ✓`);
  }
}

// Builder для конструювання будинку
class HouseBuilder {
  private house: House = new House();

  buildWalls(material: string): HouseBuilder {
    this.house.walls = material;
    console.log(`✓ Збудовані стіни з ${material}`);
    return this;
  }

  buildRoof(type: string): HouseBuilder {
    this.house.roof = type;
    console.log(`✓ Збудований дах: ${type}`);
    return this;
  }

  buildWindows(count: number): HouseBuilder {
    this.house.windows = count;
    console.log(`✓ Встановлено вікон: ${count}`);
    return this;
  }

  buildDoor(type: string): HouseBuilder {
    this.house.door = type;
    console.log(`✓ Встановлені двері: ${type}`);
    return this;
  }

  addGarage(): HouseBuilder {
    this.house.garage = true;
    console.log(`✓ Додано гараж`);
    return this;
  }

  addSwimmingPool(): HouseBuilder {
    this.house.swimmingPool = true;
    console.log(`✓ Додано басейн`);
    return this;
  }

  build(): House {
    console.log("\n🔨 Будинок готовий!\n");
    return this.house;
  }
}

// Приклад використання
export function demonstrateBuilder(): void {
  console.log("\n=== Builder Pattern ===\n");

  console.log("📍 Розташування: Одноповерховий дім\n");
  const simpleHouse = new HouseBuilder()
    .buildWalls("цегла")
    .buildRoof("черепиця")
    .buildWindows(6)
    .buildDoor("дерев'яні")
    .build();
  simpleHouse.describe();

  console.log("\n" + "=".repeat(50) + "\n");

  console.log("📍 Розташування: Розкішний маєток\n");
  const luxuryHouse = new HouseBuilder()
    .buildWalls("природний камінь")
    .buildRoof("мідь")
    .buildWindows(20)
    .buildDoor("панорамні вкрай сучасні")
    .addGarage()
    .addSwimmingPool()
    .build();
  luxuryHouse.describe();

  console.log(
    "\n✅ Builder дозволяє поетапно будувати складні об'єкти з різними комбінаціями параметрів\n"
  );
}
