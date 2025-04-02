import { Car } from "./Car";
import { Doll } from "./Doll";

export interface ToyFactory {
    createCar(): Car;
    createDoll(): Doll;
}
