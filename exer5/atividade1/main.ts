import { ComputadorBuilder } from "./builder/ComputadorBuilder";

const computador = new ComputadorBuilder()
    .setProcessador("Intel i7")
    .setMemoria("16GB RAM")
    .setArmazenamento("1TB SSD")
    .setPlacaDeVideo("RTX 3060")
    .build();

computador.exibirConfiguracao();