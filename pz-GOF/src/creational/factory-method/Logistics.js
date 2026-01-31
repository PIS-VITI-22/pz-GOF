"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoadLogistics = exports.Logistics = void 0;
class Truck {
    deliver() { console.log("Доставка вантажівкою по дорозі."); }
}
class Logistics {
    planDelivery() { this.createTransport().deliver(); }
}
exports.Logistics = Logistics;
class RoadLogistics extends Logistics {
    createTransport() { return new Truck(); }
}
exports.RoadLogistics = RoadLogistics;
