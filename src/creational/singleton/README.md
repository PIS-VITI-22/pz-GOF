# Singleton Pattern

## Що це?
Клас, з якого можна створити тільки ОДИН об'єкт. Всі отримують той самий об'єкт.

## Навіщо?
Уяви: є лічильник відвідувачів сайту. Якщо кожна сторінка створює свій лічильник - буде 10 лічильників з різними числами. НЕ ПРАВИЛЬНО!

Потрібен ОДИН лічильник для всього сайту. Всі сторінки збільшують одне і те саме число.

## Як працює?

```typescript
class Counter {
  private static instance: Counter;  // тут зберігається ТОЙ САМИЙ об'єкт
  private count: number = 0;

  private constructor() {}  // private = не можна створити через new

  public static getInstance(): Counter {
    if (!Counter.instance) {
      Counter.instance = new Counter();  // створюємо тільки раз
    }
    return Counter.instance;  // завжди повертаємо той самий
  }
}
```

## Приклад:

```typescript
const counter1 = Counter.getInstance();
counter1.increment();  // count = 1
counter1.increment();  // count = 2

const counter2 = Counter.getInstance();  // ТОЙ САМИЙ об'єкт!
counter2.increment();  // count = 3 (не 1!)

counter1.getCount();  // 3
counter2.getCount();  // 3 (однакове число)
counter1 === counter2  // true (ТОЙ САМИЙ об'єкт)
```

## В чому суть?
**БЕЗ Singleton:**
- counter1 має count = 2
- counter2 має count = 1
- Різні об'єкти, різні числа ❌

**З Singleton:**
- counter1 і counter2 це ОДИН об'єкт
- Обидва мають count = 3
- Той самий об'єкт, те саме число ✅

## Де використовувати?
- Підключення до бази даних (одне з'єднання)
- Налаштування додатку (одна конфігурація)
- Логер (один файл логів)
- Лічильник відвідувачів (одне число)

## Альтернативи

**Настройки додатку:**
```typescript
class Settings {
  private static instance: Settings;
  private theme: string = 'light';
  
  public getTheme(): string { return this.theme; }
  public setTheme(theme: string): void { this.theme = theme; }
}
```

**Підключення до БД:**
```typescript
class Database {
  private static instance: Database;
  private connected: boolean = false;
  
  public connect(): void { this.connected = true; }
  public isConnected(): boolean { return this.connected; }
}
```

