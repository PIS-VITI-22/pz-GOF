// Old interface
class OldPrinter {
  printText(text: string): void {
    console.log(`Old printer prints: ${text}`);
  }
}

// Target interface
interface IPrinter {
  print(text: string): void;
}

// Adapter
class PrinterAdapter implements IPrinter {
  constructor(private oldPrinter: OldPrinter) {}

  print(text: string): void {
    this.oldPrinter.printText(text);
  }
}

// Demo
export function runDemo() {
  const oldPrinter = new OldPrinter();
  const adapter = new PrinterAdapter(oldPrinter);

  adapter.print("Hello via Adapter!");
}