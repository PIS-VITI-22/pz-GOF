class OldScanner {
    public legacyScan(): string {
        return "Зображення зі старого сканера";
    }
}

interface ModernDevice {
    scan(): string;
}

export class ScannerAdapter implements ModernDevice {
    private oldScanner: OldScanner;

    constructor(scanner: OldScanner) {
        this.oldScanner = scanner;
    }

    public scan(): string {
        const result = this.oldScanner.legacyScan();
        return `Адаптовано: ${result}`;
    }
}