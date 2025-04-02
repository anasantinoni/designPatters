import { Creature, Dragon } from "./Creature";
export class FireRealmFactory {
    createCreature(): Creature {
        return new Dragon();
    }
}