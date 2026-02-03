"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrinterAdapter = void 0;
class OldPrinter {
    legacyPrint(text) { console.log(`[Old System] Друкую через старий драйвер: ${text}`); }
}
class PrinterAdapter {
    constructor() {
        this.oldPrinter = new OldPrinter();
    }
    print(msg) { this.oldPrinter.legacyPrint(msg); }
}
exports.PrinterAdapter = PrinterAdapter;
