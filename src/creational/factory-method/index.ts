// Transport interface
interface Transport {
  deliver(): void;
}

// Concrete products
class Car implements Transport {
  deliver(): void {
    console.log("Delivering by car 🚗");
  }
}

class Bike implements Transport {
  deliver(): void {
    console.log("Delivering by bike 🚲");
  }
}

// Creator
abstract class TransportFactory {
  abstract createTransport(): Transport;
}

// Concrete factories
class CarFactory extends TransportFactory {
  createTransport(): Transport {
    return new Car();
  }
}

class BikeFactory extends TransportFactory {
  createTransport(): Transport {
    return new Bike();
  }
}

// Demo
export function runDemo() {
  const carFactory = new CarFactory();
  const bikeFactory = new BikeFactory();

  const car = carFactory.createTransport();
  const bike = bikeFactory.createTransport();

  car.deliver();
  bike.deliver();
}