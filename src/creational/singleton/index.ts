class Singleton {
  private static instance: Singleton;

  private constructor() {
    console.log("Singleton instance created");
  }

  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  sayHello(): void {
    console.log("Hello from Singleton!");
  }
}

// Demo
export function runDemo() {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  s1.sayHello();
  console.log("Same instance?", s1 === s2);
}