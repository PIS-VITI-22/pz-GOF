interface Transport { deliver(): string; }

class Truck implements Transport { deliver = () => "доставка вантажівкою по суші"; }
class Ship implements Transport { deliver = () => "доставка судном по морю"; }

abstract class Logistics {
    public abstract createTransport(): Transport;
    public planDelivery(): string {
        const transport = this.createTransport();
        return `Логістика: ${transport.deliver()}`;
    }
}

export class RoadLogistics extends Logistics {
    public createTransport(): Transport { return new Truck(); }
}

export class SeaLogistics extends Logistics {
    public createTransport(): Transport { return new Ship(); }
}