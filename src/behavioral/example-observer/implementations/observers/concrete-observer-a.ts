import { Observer } from '../../abstractions/observer';

export class ConcreteObserverA implements Observer {
  update(data: any): void {
    console.log(`Observer A: Reacting to state change -> ${data}`);
  }
}