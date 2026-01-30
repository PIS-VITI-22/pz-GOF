interface SortStrategy {
    sort(data: string[]): string[];
}

export class AlphabeticalSort implements SortStrategy {
    sort(data: string[]): string[] {
        return [...data].sort();
    }
}

export class ReverseSort implements SortStrategy {
    sort(data: string[]): string[] {
        return [...data].sort().reverse();
    }
}

export class SortedList {
    constructor(private strategy: SortStrategy) {}

    setStrategy(strategy: SortStrategy) {
        this.strategy = strategy;
    }

    processList(list: string[]) {
        console.log("Результат сортування:", this.strategy.sort(list));
    }
}