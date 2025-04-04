import { CasaBuilder } from "./builder/CasaBuilder";

const casa = new CasaBuilder()
    .setParedes(4)
    .setJanelas(6)
    .setPortas(2)
    .setGaragem(true)
    .build();

casa.exibirDetalhes();
