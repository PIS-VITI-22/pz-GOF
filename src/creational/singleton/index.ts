// Клас "База Даних Логістики"
class LogisticsDatabase {
    // 1. Зберігаємо єдиний екземпляр тут (static означає, що це належить класу, а не об'єкту)
    private static instance: LogisticsDatabase;

    // Сховище для наших записів (просто масив рядків для прикладу)
    private logs: string[] = [];

    // 2. ПРИВАТНИЙ конструктор
    // Це найважливіше! Ми забороняємо писати "new LogisticsDatabase()" ззовні.
    private constructor() {
        console.log('Ініціалізація підключення до Бази Даних... (це має статися лише 1 раз)');
    }

    // 3. ПУБЛІЧНИЙ статичний метод для отримання екземпляра
    // Це єдиний спосіб отримати об'єкт.
    public static getInstance(): LogisticsDatabase {
        if (!LogisticsDatabase.instance) {
            // Якщо об'єкта ще немає - створюємо його
            LogisticsDatabase.instance = new LogisticsDatabase();
        }
        // Якщо об'єкт вже є - просто повертаємо його
        return LogisticsDatabase.instance;
    }

    // Бізнес-логіка: додати запис про рейс
    public addLog(message: string): void {
        this.logs.push(message);
        console.log(`[DB Write]: ${message}`);
    }

    // Бізнес-логіка: показати всі рейси
    public showLogs(): void {
        console.log('--- Всі записи в Базі Даних ---');
        console.log(this.logs.join('\n'));
        console.log('-------------------------------');
    }
}
const s1 = LogisticsDatabase.getInstance();
const s2 = LogisticsDatabase.getInstance();

if (s1 === s2) {
    console.log(
        'Singleton works, both variables contain the same instance.'
    );
} else {
    console.log('Singleton failed, variables contain different instances.');
}