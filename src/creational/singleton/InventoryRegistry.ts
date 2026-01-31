export class InventoryRegistry {
    // Статичне поле для зберігання єдиного екземпляра
    private static instance: InventoryRegistry;
    
    // Наша "база даних" майна
    private database: Map<string, number> = new Map();

    private constructor() { 
        console.log("--> Ініціалізація Головного Реєстру Майна...");
    }

    // Метод, який гарантує, що ми завжди беремо один і той самий реєстр
    public static getInstance(): InventoryRegistry {
        if (!InventoryRegistry.instance) {
            InventoryRegistry.instance = new InventoryRegistry();
        }
        return InventoryRegistry.instance;
    }

    // Додати майно
    public addItem(item: string, quantity: number): void {
        const current = this.database.get(item) || 0;
        this.database.set(item, current + quantity);
        console.log(`[РЕЄСТР] Додано: ${item}, +${quantity} шт. (Всього: ${current + quantity})`);
    }

    // Перевірити залишки
    public getStock(item: string): number {
        return this.database.get(item) || 0;
    }
}