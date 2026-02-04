// Subsystems
class CPU {
  freeze() { console.log("CPU freeze"); }
  execute() { console.log("CPU execute"); }
}

class Memory {
  load() { console.log("Memory load"); }
}

class HardDrive {
  read() { console.log("HardDrive read"); }
}

// Facade
class ComputerFacade {
  private cpu = new CPU();
  private memory = new Memory();
  private hardDrive = new HardDrive();

  start() {
    this.cpu.freeze();
    this.memory.load();
    this.hardDrive.read();
    this.cpu.execute();
    console.log("Computer started!");
  }
}

// Demo
export function runDemo() {
  const computer = new ComputerFacade();
  computer.start();
}