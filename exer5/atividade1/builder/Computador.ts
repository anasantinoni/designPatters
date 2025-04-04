export class Computador {
    public processador!: string;
    public memoria!: string;
    public armazenamento!: string;
    public placaDeVideo?: string;

    exibirConfiguracao() {
        console.log(`Computador com ${this.processador}, ${this.memoria}, ${this.armazenamento}, Placa de Vídeo: ${this.placaDeVideo || "Nenhuma"}`);
    }
}