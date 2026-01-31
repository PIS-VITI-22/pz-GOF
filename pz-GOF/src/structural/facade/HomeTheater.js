"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeTheaterFacade = void 0;
class Projector {
    on() { console.log("Проектор: Увімкнено (4K)"); }
}
class SoundSystem {
    setVolume(v) { console.log(`Звук: Рівень ${v}`); }
}
class HomeTheaterFacade {
    constructor() {
        this.projector = new Projector();
        this.sound = new SoundSystem();
    }
    watchMovie() {
        console.log("[Facade] Налаштування кінотеатру однією кнопкою...");
        this.projector.on();
        this.sound.setVolume(15);
    }
}
exports.HomeTheaterFacade = HomeTheaterFacade;
