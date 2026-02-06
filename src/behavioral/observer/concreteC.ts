// Another Concrete Observer that reacts differently to state changes.
import {Observer} from "./interfaces";

export class ConcreteObserverC implements Observer {
  update(data: any): void {

    console.log(`Observer C: Read the book: ${data}`);
  }
}
