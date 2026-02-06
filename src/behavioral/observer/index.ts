// The Observer interface defines the update method that all observers must implement.
console.log("Observer Pattern Example:");

import { Observer, Subject } from "./interfaces";
import { ConcreteSubject } from "./observers";
import { ConcreteObserverA } from "./concreteA";
import { ConcreteObserverB } from "./concreteB";

// A Concrete Subject maintains its state and notifies observers when the state changes.


// A Concrete Observer that reacts to changes in the subject.


// Another Concrete Observer that reacts differently to state changes.


const subject = new ConcreteSubject();

const observerA = new ConcreteObserverA();
const observerB = new ConcreteObserverB();

// Registering observers
subject.addObserver(observerA);
subject.addObserver(observerB);

// Changing the subject's state
subject.setState("Hello, World!");

// Output:
// Subject: State changed to "Hello, World!"
// Observer A: Reacting to state change -> Hello, World!
// Observer B: Logging new state: Hello, World!