class Projector { on() { console.log("Проектор: Увімкнено (4K)"); } }
class SoundSystem { setVolume(v: number) { console.log(`Звук: Рівень ${v}`); } }
export class HomeTheaterFacade {
    private projector = new Projector();
    private sound = new SoundSystem();
    watchMovie() {
        console.log("[Facade] Налаштування кінотеатру однією кнопкою...");
        this.projector.on();
        this.sound.setVolume(15);
    }
}
