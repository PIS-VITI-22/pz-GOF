import { Subject } from '../../abstractions/subject';
import { Observer } from '../../abstractions/observer';

// A Concrete Subject maintains its state and notifies observers when the state changes.
export class ConcreteSubject implements Subject {
  private observers: Observer[] = [];
  private state: string = "";

  /**
   * Adds an observer to the list.
   * @param observer The observer to add.
   */
  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  /**
   * Removes an observer from the list.
   * @param observer The observer to remove.
   */
  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  /**
   * Updates the state of the subject and notifies all observers.
   * @param newState The new state to set.
   */
  setState(newState: string): void {
    console.log(`Subject: State changed to "${newState}"`);
    this.state = newState;
    this.notifyObservers();
  }

  // Notifies all registered observers about the state change.
  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.state);
    }
  }
}