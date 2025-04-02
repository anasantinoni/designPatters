import { FireRealmFactory } from "./FireRealmFactory";
import { WaterRealmFactory } from "./WaterRealmFactory";

const fireFactory = new FireRealmFactory();
const waterFactory = new WaterRealmFactory();

const dragon = fireFactory.createCreature();
dragon.attack();

const serpent = waterFactory.createCreature();
serpent.attack();