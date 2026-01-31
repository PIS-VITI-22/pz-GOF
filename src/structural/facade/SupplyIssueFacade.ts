// src/structural/facade/SupplyIssueFacade.ts

class StockSystem {
    check(item: string): boolean {
        console.log(`  [Склад] Перевірка залишків для "${item}"... ОК.`);
        return true;
    }
}

class DocumentSystem {
    createInvoice(soldier: string, item: string): void {
        console.log(`  [Документи] Друк накладної на ім'я ${soldier}.`);
    }
}

// ФАСАД
export class SupplyFacade {
    private stock: StockSystem;
    private docs: DocumentSystem;

    constructor() {
        this.stock = new StockSystem();
        this.docs = new DocumentSystem();
    }

    public issueEquipment(soldierName: string, itemName: string): void {
        console.log(`\n[ФАСАД] Починаю видачу...`);
        if (this.stock.check(itemName)) {
            this.docs.createInvoice(soldierName, itemName);
            console.log(`[ФАСАД] Видача завершена успішно.\n`);
        }
    }
}