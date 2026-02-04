// Product
class House {
  walls: string = "";
  roof: string = "";
  door: string = "";

  describe(): void {
    console.log(`House with ${this.walls}, ${this.roof}, and ${this.door}`);
  }
}

// Builder interface
interface HouseBuilder {
  buildWalls(): void;
  buildRoof(): void;
  buildDoor(): void;
  getResult(): House;
}

// Concrete builder
class WoodenHouseBuilder implements HouseBuilder {
  private house: House = new House();

  buildWalls(): void {
    this.house.walls = "wooden walls";
  }
  buildRoof(): void {
    this.house.roof = "wooden roof";
  }
  buildDoor(): void {
    this.house.door = "wooden door";
  }
  getResult(): House {
    return this.house;
  }
}

// Director
class Director {
  constructor(private builder: HouseBuilder) {}

  construct(): House {
    this.builder.buildWalls();
    this.builder.buildRoof();
    this.builder.buildDoor();
    return this.builder.getResult();
  }
}

// Demo
export function runDemo() {
  const builder = new WoodenHouseBuilder();
  const director = new Director(builder);
  const house = director.construct();
  house.describe();
}