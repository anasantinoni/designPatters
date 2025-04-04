import { Computador } from "./Computador";

export class ComputadorBuilder {
    private computador: Computador;

    constructor() {
        this.computador = new Computador();
    }

    setProcessador(processador: string): this {
        this.computador.processador = processador;
        return this;
    }

    setMemoria(memoria: string): this {
        this.computador.memoria = memoria;
        return this;
    }

    setArmazenamento(armazenamento: string): this {
        this.computador.armazenamento = armazenamento;
        return this;
    }

    setPlacaDeVideo(placaDeVideo: string): this {
        this.computador.placaDeVideo = placaDeVideo;
        return this;
    }

    build(): Computador {
        return this.computador;
    }
}
