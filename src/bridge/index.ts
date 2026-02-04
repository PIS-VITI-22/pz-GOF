import { WebUI } from "./WebUI";

import { AndroidUI } from "./AndroidUI";
import { IPhoneUI } from "./IPhoneUI";
import { WebBackend } from "./WebBackend";
import { MobileBackend } from "./Backend";




const mobileBackend = new MobileBackend();
const androidUI = new AndroidUI(mobileBackend);
androidUI.render();

// Output:
// AndroidUI: Rendering data from the backend -> MobileBackend: Data from the backend

const iphoneUI = new IPhoneUI(mobileBackend);
iphoneUI.render();

// Output:
// IPhoneUI: Rendering data from the backend -> MobileBackend: Data from the backend

const webBackend = new WebBackend();
const webUI = new WebUI(webBackend);
webUI.render();