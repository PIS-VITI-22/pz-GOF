// Observer interface
interface Observer {
  update(message: string): void;
}

// Subject
class Subject {
  private observers: Observer[] = [];

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  notify(message: string): void {
    for (const obs of this.observers) {
      obs.update(message);
    }
  }
}

// Concrete observers
class User implements Observer {
  constructor(private name: string) {}
  update(message: string): void {
    console.log(`${this.name} received: ${message}`);
  }
}

// Demo
export function runDemo() {
  const subject = new Subject();

  const user1 = new User("Alice");
  const user2 = new User("Bob");

  subject.attach(user1);
  subject.attach(user2);

  subject.notify("New event happened!");
}