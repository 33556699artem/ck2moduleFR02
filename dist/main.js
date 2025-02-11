"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Transport_1 = require("./Transport");
var owner1 = new Transport_1.Transport.OwnerClass("Малышев", "Артём", "Павлович", new Date(2005, 2, 23), Transport_1.Transport.TypeOfDocument.passport, "1234", "567890");
var car1 = new Transport_1.Transport.VehicleClass("BMW", "X7", 2021, "0923FH028HFS0JBIF3347", "И123ВТ", owner1);
owner1.printOwnerInfo();
car1.printVehicleInfo();
var car2 = new Transport_1.Transport.CarCl("Cadillac", "XT5", 2021, "0923FH028HFS0JBIF3347", "И123ВТ", owner1, Transport_1.Transport.BodyType.crossover, Transport_1.Transport.CarClass.Buisiness);
car2.printVehicleInfo();
var motorbike = new Transport_1.Transport.MotorbikeCl("Progasi Race", "300", 2021, "0923FH028HFS0JBIF3347", "И123ВТ", owner1, "Дуплексная", true);
motorbike.printVehicleInfo();
var storage = new Transport_1.Transport.VehicleStorageCl;
storage.addVehicle(car1);
storage.addVehicle(motorbike);
console.log("\u0422\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u044B\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u0432 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435:");
var vehicles = storage.getAllVehicles();
for (var i in vehicles) {
    vehicles[i].printVehicleInfo();
    console.log("----------");
}
