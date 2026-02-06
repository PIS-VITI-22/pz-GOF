class Counter {
  private static instance: Counter;
  private count: number = 0;

  private constructor() {}

  public static getInstance(): Counter {
    if (!Counter.instance) {
      Counter.instance = new Counter();
    }
    return Counter.instance;
  }

  public increment(): void {
    this.count++;
    console.log(`Count: ${this.count}`);
  }

  public getCount(): number {
    return this.count;
  }
}

export function runSingletonExample(): void {
  console.log('\n=== Singleton Pattern ===\n');

  const counter1 = Counter.getInstance();
  counter1.increment();
  counter1.increment();

  const counter2 = Counter.getInstance();
  counter2.increment();

  console.log(`\nCounter1 count: ${counter1.getCount()}`);
  console.log(`Counter2 count: ${counter2.getCount()}`);
  console.log(`Same object? ${counter1 === counter2}`);
}

