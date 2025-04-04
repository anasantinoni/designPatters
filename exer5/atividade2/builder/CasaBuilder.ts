import { Casa } from "./Casa";

export class CasaBuilder {
    private casa: Casa;

    constructor() {
        this.casa = new Casa();
    }

    setParedes(paredes: number): this {
        this.casa.paredes = paredes;
        return this;
    }

    setJanelas(janelas: number): this {
        this.casa.janelas = janelas;
        return this;
    }

    setPortas(portas: number): this {
        this.casa.portas = portas;
        return this;
    }

    setGaragem(garagem: boolean): this {
        this.casa.garagem = garagem;
        return this;
    }

    build(): Casa {
        return this.casa;
    }
}