interface Transport { deliver(): void; }
class Truck implements Transport { deliver() { console.log("Доставка вантажівкою по дорозі."); } }
export abstract class Logistics {
    abstract createTransport(): Transport;
    planDelivery() { this.createTransport().deliver(); }
}
export class RoadLogistics extends Logistics {
    createTransport() { return new Truck(); }
}
