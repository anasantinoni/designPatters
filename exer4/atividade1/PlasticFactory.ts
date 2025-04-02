import { Car } from "./Car";
import { Doll } from "./Doll";
import { ToyFactory } from "./ToyFactory";

export class PlasticFactory implements ToyFactory {
    createCar(): Car {
        return new Car("Carro de Plástico");
    }
    createDoll(): Doll {
        return new Doll("Boneca de Plástico");
    }
}