import {AndroidUI} from './Android';
import {IphoneUI} from  './Iphone';
class MobileBackend implements Backend {

    public getData() {
        return "MobileBackend: Data from the backend";
    }
}
    const mobileBackend = new MobileBackend();
    const androidUI = new AndroidUI(mobileBackend);
    androidUI.render();
    const iphoneUI = new IphoneUI(mobileBackend);
    iphoneUI.render();
