/**
 * Factory Method Pattern
 * Проблема: Коли код залежить від конкретних класів, це створює жорстку залежність
 */

// Абстрактна база для документів
abstract class Document {
  abstract open(): void;
  abstract close(): void;
  abstract save(): void;
}

// Конкретні класи документів
class PDFDocument extends Document {
  open(): void {
    console.log("📄 Відкриваю PDF документ...");
  }

  close(): void {
    console.log("📄 Закриваю PDF документ");
  }

  save(): void {
    console.log("💾 Зберігаю PDF документ");
  }
}

class WordDocument extends Document {
  open(): void {
    console.log("📝 Відкриваю Word документ...");
  }

  close(): void {
    console.log("📝 Закриваю Word документ");
  }

  save(): void {
    console.log("💾 Зберігаю Word документ");
  }
}

class ExcelDocument extends Document {
  open(): void {
    console.log("📊 Відкриваю Excel документ...");
  }

  close(): void {
    console.log("📊 Закриваю Excel документ");
  }

  save(): void {
    console.log("💾 Зберігаю Excel документ");
  }
}

// Factory - фабрика для створення документів
class DocumentFactory {
  static createDocument(type: string): Document {
    switch (type.toLowerCase()) {
      case "pdf":
        return new PDFDocument();
      case "word":
        return new WordDocument();
      case "excel":
        return new ExcelDocument();
      default:
        throw new Error(`Невідомий тип документа: ${type}`);
    }
  }
}

// Приклад використання
export function demonstrateFactoryMethod(): void {
  console.log("\n=== Factory Method Pattern ===\n");

  const types = ["PDF", "Word", "Excel"];

  types.forEach((type) => {
    const doc = DocumentFactory.createDocument(type);
    doc.open();
    doc.save();
    doc.close();
    console.log();
  });

}
