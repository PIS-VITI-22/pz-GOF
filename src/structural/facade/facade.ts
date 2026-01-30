/**
 * Facade Pattern
 * Задача: Забезпечити простий уніфікований інтерфейс до складної підсистеми
 * Проблема: Складна підсистема з багатьма взаємопов'язаними класами
 */

// Складна підсистема - компоненти кінотеатру
class Projector {
  on(): void {
    console.log("📽️  Проектор: включено");
  }
  off(): void {
    console.log("📽️  Проектор: вимкнено");
  }
}

class SoundSystem {
  on(): void {
    console.log("🔊 Звукова система: включена");
  }
  off(): void {
    console.log("🔊 Звукова система: вимкнена");
  }
  setVolume(level: number): void {
    console.log(`🔊 Звукова система: гучність ${level}%`);
  }
}

class Lights {
  dim(): void {
    console.log("💡 Світло: приглушено");
  }
  on(): void {
    console.log("💡 Світло: включено");
  }
}

class DVDPlayer {
  on(): void {
    console.log("📀 DVD плеєр: включено");
  }
  off(): void {
    console.log("📀 DVD плеєр: вимкнено");
  }
  play(movie: string): void {
    console.log(`📀 DVD плеєр: програю "${movie}"`);
  }
}

class Popcorn {
  prepare(): void {
    console.log("🍿 Попкорн машина: готування попкорну...");
  }
}

// Facade - простий інтерфейс до складної підсистеми
class HomeTheaterFacade {
  private projector: Projector;
  private soundSystem: SoundSystem;
  private lights: Lights;
  private dvdPlayer: DVDPlayer;
  private popcorn: Popcorn;

  constructor() {
    this.projector = new Projector();
    this.soundSystem = new SoundSystem();
    this.lights = new Lights();
    this.dvdPlayer = new DVDPlayer();
    this.popcorn = new Popcorn();
  }

  watchMovie(movieName: string): void {
    console.log(`\n🎬 Розпочинаю фільм: "${movieName}"\n`);
    this.popcorn.prepare();
    this.lights.dim();
    this.projector.on();
    this.soundSystem.on();
    this.soundSystem.setVolume(80);
    this.dvdPlayer.on();
    this.dvdPlayer.play(movieName);
  }

  endMovie(): void {
    console.log(`\n🎬 Завершую фільм\n`);
    this.dvdPlayer.off();
    this.soundSystem.off();
    this.projector.off();
    this.lights.on();
  }
}

// Приклад використання
export function demonstrateFacade(): void {
  console.log("\n=== Facade Pattern ===\n");

  const homeTheater = new HomeTheaterFacade();

  console.log("❌ БЕЗ Facade (потрібно управляти всім вручну):\n");
  console.log("  const projector = new Projector();");
  console.log("  const soundSystem = new SoundSystem();");
  console.log("  const lights = new Lights();");
  console.log("  // ... і так далі для кожного компонента\n");

  console.log("=".repeat(50));

  console.log("\n✅ З Facade (просто викликаємо один метод):\n");
  homeTheater.watchMovie("Матриця");
  homeTheater.endMovie();

  console.log(
    "✅ Facade надає простий інтерфейс до складної підсистеми, приховуючи складність\n"
  );
}
