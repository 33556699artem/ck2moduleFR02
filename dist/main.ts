import {Transport} from "./Transport";

const owner1 = new Transport.OwnerClass("Малышев", "Артём", "Павлович", new Date(2005, 2, 23), Transport.TypeOfDocument.passport, "1234", "567890");

const car1 = new Transport.VehicleClass("BMW", "X7", 2021, "0923FH028HFS0JBIF3347", "И123ВТ", owner1);
owner1.printOwnerInfo();
car1.printVehicleInfo();

const car2 = new Transport.CarCl("Cadillac", "XT5", 2021, "0923FH028HFS0JBIF3347", "И123ВТ", owner1, Transport.BodyType.crossover, Transport.CarClass.Buisiness);
car2.printVehicleInfo();

const motorbike = new Transport.MotorbikeCl("Progasi Race", "300", 2021, "0923FH028HFS0JBIF3347", "И123ВТ", owner1, "Дуплексная", true);
motorbike.printVehicleInfo();

const storage = new Transport.VehicleStorageCl<Transport.VehicleClass>;
storage.addVehicle(car1);
storage.addVehicle(motorbike);
console.log(`Транспортные средства в хранилище:`);
let vehicles = storage.getAllVehicles();
for (let i in vehicles) {
    vehicles[i].printVehicleInfo();
    console.log(`----------`);
}