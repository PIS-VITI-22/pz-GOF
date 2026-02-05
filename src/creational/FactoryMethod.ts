interface Button {
    render(): void;
}

class WindowsButton implements Button {
    render() { console.log("Рендер кнопки у стилі Windows"); }
}

class MacButton implements Button {
    render() { console.log("Рендер кнопки у стилі macOS"); }
}

abstract class Dialog {
    abstract createButton(): Button; // Фабричний метод

    renderWindow() {
        const okButton = this.createButton();
        okButton.render();
    }
}

export class WindowsDialog extends Dialog {
    createButton() { return new WindowsButton(); }
}

export class MacDialog extends Dialog {
    createButton() { return new MacButton(); }
}