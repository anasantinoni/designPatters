class Produto {
    constructor(private nome: string, private preco: number, private quantidadeEmEstoque: number) {}

    atualizarPreco(novoPreco: number): void {
        this.preco = novoPreco;
    }

    adicionarEstoque(quantidade: number): void {
        this.quantidadeEmEstoque += quantidade;
    }

    removerEstoque(quantidade: number): void {
        if (quantidade <= this.quantidadeEmEstoque) {
            this.quantidadeEmEstoque -= quantidade;
        }
    }
}

class CadastroProdutos {
    private produtos: Produto[] = [];

    adicionarProduto(produto: Produto): void {
        this.produtos.push(produto);
    }

    exibirRelatorio(): void {
        this.produtos.forEach((produto) => {
            console.log(`Produto: ${produto["nome"]}, Preço: R$${produto["preco"]}, Quantidade: ${produto["quantidadeEmEstoque"]}`);
        });
    }
}

const cadastro = new CadastroProdutos();
cadastro.adicionarProduto(new Produto("Notebook", 5000, 10));
cadastro.exibirRelatorio();