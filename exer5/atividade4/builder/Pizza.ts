export class Pizza {
    public tamanho!: string;
    public ingredientes: string[] = [];

    exibirDetalhes() {
        console.log(`Pizza ${this.tamanho} com: ${this.ingredientes.join(", ")}`);
    }
}