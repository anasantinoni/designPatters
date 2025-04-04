import { PizzaBuilder } from "./builder/PizzaBuilder";

const pizza = new PizzaBuilder()
    .setTamanho("Grande")
    .addIngrediente("Queijo")
    .addIngrediente("Calabresa")
    .addIngrediente("Azeitona")
    .build();

pizza.exibirDetalhes();
