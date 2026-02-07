import { Observer } from '../../abstractions/observer';

export class ConcreteObserverB implements Observer {
  update(data: any): void {
    console.log(`Observer B: Logging new state: ${data}`);
  }
}