export interface ControlSystem {
    navigate(): void;
}

export class SteeringWheel implements ControlSystem {
    navigate() {
        console.log("Dirigindo com volante!");
    }
}

export class Joystick implements ControlSystem {
    navigate() {
        console.log("Pilotando com joystick!");
    }
}