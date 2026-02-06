// Another Concrete Observer that reacts differently to state changes.
import {Observer} from "./interfaces";

export class ConcreteObserverB implements Observer {
  update(data: any): void {
    console.log(`Observer B: Logging new state: ${data}`);
  }
}
