class CPU { freeze() { console.log("Процесор готовий"); } }
class Memory { load() { console.log("Пам'ять завантажена"); } }

export class ComputerFacade {
    private cpu = new CPU();
    private memory = new Memory();

    start() {
        this.cpu.freeze();
        this.memory.load();
        console.log("Комп'ютер запущено успішно!");
    }
}