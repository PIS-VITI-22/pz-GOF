import{AndroidUI} from "./Android";

function bridgeUI() {
     console.log("hello");
     const androidBrowserUI = new AndroidUI(webBackend);
     androidBrowserUI.render();
 }
 bridgeUI();