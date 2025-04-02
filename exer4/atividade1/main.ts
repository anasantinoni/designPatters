import { PlasticFactory } from "./PlasticFactory";
import { WoodenFactory } from "./WoodenFactory";

const plasticFactory = new PlasticFactory();
const woodenFactory = new WoodenFactory();

const plasticCar = plasticFactory.createCar();
plasticCar.play();

const woodenDoll = woodenFactory.createDoll();
woodenDoll.play();