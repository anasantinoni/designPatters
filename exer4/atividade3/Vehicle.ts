import { Propulsion } from "./Propulsion";
import { ControlSystem } from "./ControlSystem";

export class Vehicle {
    constructor(private propulsion: Propulsion, private control: ControlSystem) {}
    drive() {
        this.propulsion.accelerate();
        this.control.navigate();
    }
}