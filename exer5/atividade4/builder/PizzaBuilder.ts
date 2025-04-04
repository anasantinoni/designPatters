import { Pizza } from "./Pizza";

export class PizzaBuilder {
    private pizza: Pizza;

    constructor() {
        this.pizza = new Pizza();
    }

    setTamanho(tamanho: string): this {
        this.pizza.tamanho = tamanho;
        return this;
    }

    addIngrediente(ingrediente: string): this {
        this.pizza.ingredientes.push(ingrediente);
        return this;
    }

    build(): Pizza {
        return this.pizza;
    }
}