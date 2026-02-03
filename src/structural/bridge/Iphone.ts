import {UI} from "./UI";
export class IphoneUI extends UI {

    public render() {
        const data = this.backend.getData();
        console.log("IPhoneUI: Rendering data from the backend ->", data);
    }
}