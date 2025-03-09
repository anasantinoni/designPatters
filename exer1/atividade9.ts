interface Relatorio {
    gerar(dados: string[]): void;
}

class PdfRelatorio implements Relatorio {
    gerar(dados: string[]): void {
        console.log(`Gerando relatório em PDF com os dados: ${dados}`);
    }
}

class ExcelRelatorio implements Relatorio {
    gerar(dados: string[]): void {
        console.log(`Gerando relatório em Excel com os dados: ${dados}`);
    }
}

class HtmlRelatorio implements Relatorio {
    gerar(dados: string[]): void {
        console.log(`Gerando relatório em HTML com os dados: ${dados}`);
    }
}

class Gerente {
    solicitarRelatorio(relatorio: Relatorio, dados: string[]): void {
        relatorio.gerar(dados);
    }
}

const gerente = new Gerente();
gerente.solicitarRelatorio(new PdfRelatorio(), ["Vendas", "Lucro", "Clientes"]);