// Strategy interface
interface SortStrategy {
  sort(data: number[]): number[];
}

// Concrete strategies
class BubbleSort implements SortStrategy {
  sort(data: number[]): number[] {
    console.log("Sorting with BubbleSort...");
    return [...data].sort((a, b) => a - b);
  }
}

class QuickSort implements SortStrategy {
  sort(data: number[]): number[] {
    console.log("Sorting with QuickSort...");
    return [...data].sort((a, b) => a - b); // simplified
  }
}

// Context
class Sorter {
  constructor(private strategy: SortStrategy) {}

  setStrategy(strategy: SortStrategy) {
    this.strategy = strategy;
  }

  execute(data: number[]): void {
    const result = this.strategy.sort(data);
    console.log("Result:", result);
  }
}

// Demo
export function runDemo() {
  const data = [5, 2, 9, 1];

  const sorter = new Sorter(new BubbleSort());
  sorter.execute(data);

  sorter.setStrategy(new QuickSort());
  sorter.execute(data);
}