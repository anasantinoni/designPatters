export interface Creature {
    attack(): void;
}

export class Dragon implements Creature {
    attack() {
        console.log("O Dragão cospe fogo!");
    }
}

export class SeaSerpent implements Creature {
    attack() {
        console.log("A Serpente do Mar lança um jato de água!");
    }
}