class OldPrinter {
    legacyPrint(text: string) { console.log(`[Old System] Друкую через старий драйвер: ${text}`); }
}
export interface NewPrinter { print(msg: string): void; }
export class PrinterAdapter implements NewPrinter {
    private oldPrinter = new OldPrinter();
    print(msg: string) { this.oldPrinter.legacyPrint(msg); }
}
