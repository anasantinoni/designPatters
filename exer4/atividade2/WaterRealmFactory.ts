import { Creature, SeaSerpent } from "./Creature";
export class WaterRealmFactory {
    createCreature(): Creature {
        return new SeaSerpent();
    }
}