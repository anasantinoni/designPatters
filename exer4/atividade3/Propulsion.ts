export interface Propulsion {
    accelerate(): void;
}

export class JetEngine implements Propulsion {
    accelerate() {
        console.log("Acelerando com motor a jato!");
    }
}

export class RocketBoost implements Propulsion {
    accelerate() {
        console.log("Acelerando com foguete!");
    }
}