// src/creational/factory-method/EquipmentFactory.ts

// 1. Інтерфейс: Все майно повинно мати метод "отримати інфо"
export interface IEquipment {
    getInfo(): string;
}

// 2. Конкретний продукт: Військова форма
class Uniform implements IEquipment {
    constructor(private size: string) {}
    
    getInfo(): string { 
        return `Форма польова (Розмір: ${this.size})`; 
    }
}

// 3. Конкретний продукт: Бронежилет
class BodyArmor implements IEquipment {
    constructor(private protectionLevel: number) {}
    
    getInfo(): string { 
        return `Бронежилет (Клас захисту: ${this.protectionLevel})`; 
    }
}

// 4. Абстрактна фабрика
export abstract class EquipmentFactory {
    // Фабричний метод (має бути реалізований у підкласах)
    public abstract createEquipment(param: string | number): IEquipment;

    // Головна логіка: Створити майно і одразу залогувати це
    public issueSupply(param: string | number): void {
        const equipment = this.createEquipment(param);
        console.log(`[ФАБРИКА] Видано зі складу: ${equipment.getInfo()}`);
    }
}

// 5. Фабрика форм (знає, як робити форми)
export class UniformFactory extends EquipmentFactory {
    public createEquipment(size: string): IEquipment {
        return new Uniform(size);
    }
}

// 6. Фабрика броні (знає, як робити бронежилети)
export class ArmorFactory extends EquipmentFactory {
    public createEquipment(level: number): IEquipment {
        return new BodyArmor(level);
    }
}