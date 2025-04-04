import { CarroBuilder } from "./builder/CarroBuilder";

const carro = new CarroBuilder()
    .setMotor("V8 Turbo")
    .setCor("Vermelho")
    .setAno(2024)
    .build();

carro.exibirDetalhes();
