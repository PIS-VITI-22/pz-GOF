// The Observer interface defines the update method that all observers must implement.
export interface Observer {
  // Called when the subject's state changes.
  update(data: any): void;
}