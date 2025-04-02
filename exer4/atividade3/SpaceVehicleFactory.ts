import { RocketBoost } from "./Propulsion";
import { Joystick } from "./ControlSystem";
import { Vehicle } from "./Vehicle";

export class SpaceVehicleFactory {
    createVehicle(): Vehicle {
        return new Vehicle(new RocketBoost(), new Joystick());
    }
}