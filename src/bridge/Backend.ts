

export abstract class Backend {
  abstract getData(): string;
}

export class MobileBackend implements Backend {
  public getData() {
    return "MobileBackend: Data from the backend";
  }
}