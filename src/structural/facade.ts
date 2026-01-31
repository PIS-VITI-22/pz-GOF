class Lighting { on = () => console.log("Світло увімкнено"); }
class TV { play = () => console.log("Фільм запущено"); }

export class SmartHomeFacade {
    constructor(private light = new Lighting(), private tv = new TV()) {}
    public watchMovie(): void {
        console.log("Готуємо систему до перегляду...");
        this.light.on();
        this.tv.play();
    }
}