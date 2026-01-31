// src/structural/adapter/LegacySystemAdapter.ts

// 1. Інтерфейс вашої НОВОЇ системи (чого ми хочемо)
export interface INewSupplySystem {
    addDigitalRecord(itemId: string, status: string): void;
}

// 2. СТАРИЙ клас (Адаптовуваний) - імітація старого журналу
export class OldPaperLog {
    public writeInJournal(text: string): void {
        console.log(`[СТАРИЙ ЖУРНАЛ] Ручний запис: "${text}"`);
    }
}

// 3. АДАПТЕР (З'єднує нове зі старим)
export class PaperToDigitalAdapter implements INewSupplySystem {
    private oldLog: OldPaperLog;

    constructor(oldLog: OldPaperLog) {
        this.oldLog = oldLog;
    }

    public addDigitalRecord(itemId: string, status: string): void {
        // Адаптер перетворює нові зручні дані у старий формат рядка
        const logString = `МАЙНО_ID:${itemId} | СТАТУС:${status}`;
        this.oldLog.writeInJournal(logString);
    }
}