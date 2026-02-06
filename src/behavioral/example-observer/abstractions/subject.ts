import { Observer } from './observer';
// The Subject interface declares methods for adding, removing, and notifying observers.
export interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}