interface ShippingStrategy {
  calculateCost(weight: number, distance: number): number;
}

class FedExStrategy implements ShippingStrategy {
  calculateCost(weight: number, distance: number): number {
    return weight * 0.5 + distance * 0.1; // Example formula
  }
}

class UPSStrategy implements ShippingStrategy {
  calculateCost(weight: number, distance: number): number {
    return weight * 0.4 + distance * 0.2; // Example formula
  }
}

class USPSStrategy implements ShippingStrategy {
  calculateCost(weight: number, distance: number): number {
    return weight * 0.3 + distance * 0.15; // Example formula
  }
}

class ShippingCostCalculator {
  private shippingStrategy: ShippingStrategy;

  constructor(shippingStrategy: ShippingStrategy) {
    this.shippingStrategy = shippingStrategy;
  }

  setStrategy(strategy: ShippingStrategy) {
    this.shippingStrategy = strategy;
  }

  calculateCost(weight: number, distance: number): number {
    return this.shippingStrategy.calculateCost(weight, distance);
  }
}

// Usage
const fedExStrategy = new FedExStrategy();
const upsStrategy = new UPSStrategy();
const uspsStrategy = new USPSStrategy();

const calculator = new ShippingCostCalculator(fedExStrategy);

let cost = calculator.calculateCost(10, 100);
console.log("FedEx:", cost);

calculator.setStrategy(upsStrategy);
cost = calculator.calculateCost(10, 100);
console.log("UPS:", cost);

calculator.setStrategy(uspsStrategy);
cost = calculator.calculateCost(10, 100);
console.log("USPS:", cost);