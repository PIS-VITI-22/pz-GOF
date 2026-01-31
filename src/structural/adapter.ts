class LegacyPrinter {
    printOld(msg: string) { console.log(`[Old System] ${msg}`); }
}

interface ModernPrinter { print(msg: string): void; }

export class PrinterAdapter implements ModernPrinter {
    constructor(private legacyPrinter: LegacyPrinter = new LegacyPrinter()) {}
    public print(msg: string): void {
        this.legacyPrinter.printOld(msg);
    }
}