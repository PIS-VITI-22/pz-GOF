interface Transport {
    deliver(): void;
}

class Truck implements Transport {
    deliver(): void {
        console.log('🚚 Truck: Доставляю по дорозі.');
    }
}

class Ship implements Transport {
    deliver(): void {
        console.log('🚢 Ship: Доставляю морем.');
    }
}

abstract class Logistics {
    public abstract createTransport(): Transport;

    public planDelivery(): void {
        const transport = this.createTransport();
        transport.deliver();
    }
}

export class RoadLogistics extends Logistics {
    public createTransport(): Transport {
        return new Truck();
    }
}

export class SeaLogistics extends Logistics {
    public createTransport(): Transport {
        return new Ship();
    }

}


console.log('--- Тест: Логістика дорогою ---');
const myRoadLogistics = new RoadLogistics();
myRoadLogistics.planDelivery();


console.log('\n--- Тест: Логістика морем ---');
const mySeaLogistics = new SeaLogistics();
mySeaLogistics.planDelivery();
