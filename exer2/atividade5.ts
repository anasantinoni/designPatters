abstract class Publicacao {
    constructor(public titulo: string, public autor: string) {}

    abstract exibirResumo(): void;
}

class Artigo extends Publicacao {
    constructor(titulo: string, autor: string, public numeroPalavras: number) {
        super(titulo, autor);
    }

    exibirResumo(): void {
        console.log(`Artigo: ${this.titulo}\nAutor: ${this.autor}\nNúmero de Palavras: ${this.numeroPalavras}`);
    }
}

class Video extends Publicacao {
    constructor(titulo: string, autor: string, public duracao: number) {
        super(titulo, autor);
    }

    exibirResumo(): void {
        console.log(`Vídeo: ${this.titulo}\nAutor: ${this.autor}\nDuração: ${this.duracao} minutos`);
    }
}

// exemplop
const artigo = new Artigo("Introdução ao TypeScript", "João Silva", 1200);
const video = new Video("Tutorial de TypeScript", "Maria Souza", 45);

artigo.exibirResumo();
video.exibirResumo();
