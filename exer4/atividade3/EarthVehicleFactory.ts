import { JetEngine } from "./Propulsion";
import { SteeringWheel } from "./ControlSystem";
import { Vehicle } from "./Vehicle";

export class EarthVehicleFactory {
    createVehicle(): Vehicle {
        return new Vehicle(new JetEngine(), new SteeringWheel());
    }
}