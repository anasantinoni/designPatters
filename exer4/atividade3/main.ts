import { EarthVehicleFactory } from "./EarthVehicleFactory";
import { SpaceVehicleFactory } from "./SpaceVehicleFactory";

const earthFactory = new EarthVehicleFactory();
const spaceFactory = new SpaceVehicleFactory();

const earthVehicle = earthFactory.createVehicle();
earthVehicle.drive();

const spaceVehicle = spaceFactory.createVehicle();
spaceVehicle.drive();
