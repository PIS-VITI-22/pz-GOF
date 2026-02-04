import { Backend } from './Backend';

export abstract class UI {
  public backend: Backend;

  constructor(backend: Backend) {
    this.backend = backend;
  }

  abstract render(): void;
}