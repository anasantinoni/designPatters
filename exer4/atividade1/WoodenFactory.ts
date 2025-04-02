import { ToyFactory } from "./ToyFactory";
import { Car } from "./Car";
import { Doll } from "./Doll";

export class WoodenFactory implements ToyFactory {
    createCar(): Car {
        return new Car("Carro de Madeira");
    }
    createDoll(): Doll {
        return new Doll("Boneca de Madeira");
    }
}
