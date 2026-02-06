// The Observer interface defines the update method that all observers must implement.
export interface Observer {
  // Called when the subject's state changes.
  update(data: any): void;
}

// The Subject interface declares methods for adding, removing, and notifying observers.
export interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

