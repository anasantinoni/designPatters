export class Casa {
    public paredes!: number;
    public janelas!: number;
    public portas!: number;
    public garagem?: boolean;

    exibirDetalhes() {
        console.log(`Casa com ${this.paredes} paredes, ${this.janelas} janelas, ${this.portas} portas, Garagem: ${this.garagem ? "Sim" : "Não"}`);
    }
}