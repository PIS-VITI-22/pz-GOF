import {AndroidUI} from "./Android";
import {WebUI} from "./WebUI";

class WebBackend implements Backend {
    public getData(): string {
        return "WebBackend: Data from the backend";
    }
}
const webBackend = new WebBackend();
const webUI = new WebUI(webBackend);
webUI.render();
const androidBrowserUI = new AndroidUI(webBackend);
androidBrowserUI.render();