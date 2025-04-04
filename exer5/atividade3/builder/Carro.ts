export class Carro {
    public motor!: string;
    public cor!: string;
    public ano!: number;

    exibirDetalhes() {
        console.log(`Carro ${this.cor}, Motor: ${this.motor}, Ano: ${this.ano}`);
    }
}