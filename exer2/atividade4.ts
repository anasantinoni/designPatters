class Conteudo {
    public titulo: string;
    public descricao: string;

    constructor(titulo: string, descricao: string) {
        this.titulo = titulo;
        this.descricao = descricao;
    }

    exibirDetalhes(): void {
        console.log(`Título: ${this.titulo}\nDescrição: ${this.descricao}`);
    }
}

class GerenciadorDeConteudo {
    private conteudos: Conteudo[] = [];

    adicionarConteudo(titulo: string, descricao: string): void {
        const novoConteudo = new Conteudo(titulo, descricao);
        this.conteudos.push(novoConteudo);
        console.log(`Conteúdo "${titulo}" adicionado.`);
    }

    removerConteudo(index: number): void {
        if (index >= 0 && index < this.conteudos.length) {
            const conteudoRemovido = this.conteudos.splice(index, 1)[0];
            console.log(`Conteúdo "${conteudoRemovido.titulo}" removido.`);
        } else {
            console.log("Índice inválido.");
        }
    }

    listarConteudos(): void {
        console.log("Lista de Conteúdos:");
        this.conteudos.forEach((conteudo, index) => {
            console.log(`${index + 1}. ${conteudo.titulo} - ${conteudo.descricao}`);
        });
    }
}

// exemplo
const gerenciador = new GerenciadorDeConteudo();
gerenciador.adicionarConteudo("Introdução ao TypeScript", "Aprenda o básico do TypeScript.");
gerenciador.adicionarConteudo("Programação Orientada a Objetos", "Conceitos essenciais de POO.");
gerenciador.listarConteudos();
gerenciador.removerConteudo(0);
gerenciador.listarConteudos();
