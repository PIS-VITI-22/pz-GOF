<<<<<<< HEAD
# Практична робота: GOF Патерни проєктування

**Тема:** Система обліку речового майна роти.
**Мова виконання:** TypeScript.

У цьому проєкті реалізовано 5 патернів проєктування (Gang of Four) для вирішення типових задач при розробці системи військової логістики.

##  Реалізовані патерни

Всього реалізовано 5 патернів з різних груп:

### 1. Singleton (Одинак)
**Де використано:** `src/creational/singleton/InventoryRegistry.ts`
**Призначення:** Створено клас `InventoryRegistry`, який виступає єдиним реєстром майна. Це гарантує, що в системі існує лише одна база даних залишків і запобігає розсинхронізації даних.

### 2. Factory Method (Фабричний метод)
**Де використано:** `src/creational/factory-method/EquipmentFactory.ts`
**Призначення:** Використовується для створення різних типів спорядження (класи `Uniform` та `BodyArmor`). Це дозволяє уніфікувати процес видачі через загальний інтерфейс, не прив'язуючись до конкретних класів у основному коді.

### 3. Adapter (Адаптер)
**Де використано:** `src/structural/adapter/LegacySystemAdapter.ts`
**Призначення:** Клас `PaperToDigitalAdapter` дозволяє новій системі працювати зі старим форматом ведення обліку (`OldPaperLog`). Адаптер конвертує виклики сучасної системи у формат, зрозумілий старій системі.

### 4. Facade (Фасад)
**Де використано:** `src/structural/facade/SupplyIssueFacade.ts`
**Призначення:** Клас `SupplyFacade` об'єднує роботу трьох підсистем: перевірки складу, оформлення документів та логістики. Клієнтський код викликає лише один метод `issueEquipment()`, замість того щоб керувати всіма процесами вручну.

### 5. Observer (Спостерігач)
**Де використано:** `src/behavioral/observer/SupplyObserver.ts`
**Призначення:** Реалізовано механізм підписки. Командир (`CommanderObserver`) автоматично отримує сповіщення, коли на склад (`SupplyWarehouse`) надходить нове майно.

---

##  Як запустити проєкт

Для запуску необхідно мати встановлений **Node.js**.

1. **Встановити залежності:**
   ```bash
   npm install

2. **Запустити демонстрацію всіх патернів**.
   ```bash
   npx ts-node examples/run-all.ts

3. **Структура проекту**.
   pz-GOF
├── src
│   ├── creational
│   │   ├── factory-method
│   │   └── singleton
│   ├── structural
│   │   ├── adapter
│   │   └── facade
│   └── behavioral
│       └── observer
├── examples
│   └── run-all.ts
├── package.json
└── tsconfig.json
=======
# Practical lesson pz-GOF  
# Реалізація GOF патернів проєктування  

> У цьому занятті студенти отримують практичний досвід імплементації класичних патернів проєктування (GoF — Gang of Four).  
> Мета — навчитися застосовувати породжувальні, структурні та поведінкові патерни для покращення архітектури програмних рішень.


## What need to do:
* Ознайомитися з основними групами патернів GoF:
  * Породжувальні (Creational)
  * Структурні (Structural)
  * Поведінкові (Behavioral)
* Реалізувати:
  * **2 породжувальні патерни** (наприклад: Factory Method, Abstract Factory, Builder, Singleton, Prototype)
  * **2 структурні патерни** (наприклад: Adapter, Facade, Decorator, Composite, Proxy, Bridge)
  * **1 поведінковий патерн** (наприклад: Strategy, Observer, Command, Iterator, Chain of Responsibility)
* Продемонструвати роботу кожного патерна (консольний приклад або простий сценарій)
* Пояснити, яку проблему вирішує кожен патерн
* Порівняти, як патерни покращують архітектуру коду порівняно з «анти-прикладами»
* Підготувати коротку документацію в README.md


## Acceptance criteria
* Використовуючи мову програмування Typescript
* Реалізовано **мінімум 5 патернів**:
  * 2 породжувальні
  * 2 структурні
  * 1 поведінковий
* Кожен патерн:
  * реалізований у окремій директорії  
  * має зрозумілий приклад застосування  
  * має коротке пояснення призначення  
  * демонструє очікувану роботу (через console.log або unit-тест)
* Код структурований за групами патернів
* README.md містить:
  * опис реалізованих патернів  
  * приклади запуску  
  * короткі висновки  
* Самостійна робота виконана:
  * додаткові патерни / додаткові приклади / альтернативні реалізації (опціонально)
* Проєкт успішно запускається

## Directory Structure

```
├── pz-GOF
│   ├── src
│   │   ├── creational
│   │   │   ├── factory-method
│   │   │   ├── builder
│   │   │   └── singleton
│   │   ├── structural
│   │   │   ├── adapter
│   │   │   ├── facade
│   │   │   └── decorator
│   │   ├── behavioral
│   │   │   ├── strategy
│   │   │   └── observer
│   ├── examples
│   │   ├── run-all.ts
│   ├── .editorconfig
│   ├── .gitignore
│   ├── package.json
│   ├── README.md
└──

```
## Useful links

[Refactoring Guru — Патерни проєктування](https://refactoring.guru/uk/design-patterns)

[Design Patterns in JavaScript](https://www.patterns.dev/posts/classic-design-patterns/)

[Head First Design Patterns (book)](https://www.oreilly.com/library/view/head-first-design/0596007124/)

[JavaScript Design Patterns — Addy Osmani](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

[Gang of Four (GoF) Patterns Overview](https://www.digitalocean.com/community/tutorials/gangs-of-four-gof-design-patterns)
>>>>>>> bcf5a3e7bb8a8612043877c338d21ebc0c2b0726
