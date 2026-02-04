// Component
interface Coffee {
  cost(): number;
  description(): string;
}

// Concrete component
class SimpleCoffee implements Coffee {
  cost(): number {
    return 5;
  }
  description(): string {
    return "Simple coffee";
  }
}

// Decorator
class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}
  cost(): number {
    return this.coffee.cost();
  }
  description(): string {
    return this.coffee.description();
  }
}

// Concrete decorators
class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return super.cost() + 2;
  }
  description(): string {
    return super.description() + ", milk";
  }
}

class SugarDecorator extends CoffeeDecorator {
  cost(): number {
    return super.cost() + 1;
  }
  description(): string {
    return super.description() + ", sugar";
  }
}

// Demo
export function runDemo() {
  let coffee: Coffee = new SimpleCoffee();
  console.log(`${coffee.description()} costs $${coffee.cost()}`);

  coffee = new MilkDecorator(coffee);
  console.log(`${coffee.description()} costs $${coffee.cost()}`);

  coffee = new SugarDecorator(coffee);
  console.log(`${coffee.description()} costs $${coffee.cost()}`);
}