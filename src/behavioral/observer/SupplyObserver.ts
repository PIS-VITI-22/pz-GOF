// src/behavioral/observer/SupplyObserver.ts

interface IObserver {
    update(message: string): void;
}

// Суб'єкт (Склад)
export class SupplyWarehouse {
    private observers: IObserver[] = [];

    // Підписати когось на сповіщення
    public addObserver(observer: IObserver): void {
        this.observers.push(observer);
    }

    // Отримати майно і сповістити всіх
    public addIncomingSupply(item: string): void {
        console.log(`\n[СКЛАД] Приїхала машина з: ${item}`);
        this.notifyAll(`Увага! Надійшло нове майно: ${item}`);
    }

    private notifyAll(message: string): void {
        this.observers.forEach(observer => observer.update(message));
    }
}

// Спостерігач (Командир)
export class CommanderObserver implements IObserver {
    constructor(private name: string) {}

    update(message: string): void {
        console.log(`[📱 SMS командиру ${this.name}]: ${message}`);
    }
}