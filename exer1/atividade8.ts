interface MetodoPagamento {
    pagar(valor: number): void;
}

class CartaoCredito implements MetodoPagamento {
    pagar(valor: number): void {
        console.log(`Pagamento de R$${valor} realizado com cartão de crédito.`);
    }
}

class PayPal implements MetodoPagamento {
    pagar(valor: number): void {
        console.log(`Pagamento de R$${valor} realizado via PayPal.`);
    }
}

class Boleto implements MetodoPagamento {
    pagar(valor: number): void {
        console.log(`Pagamento de R$${valor} realizado com boleto.`);
    }
}

class Compra {
    constructor(private valor: number) {}

    realizarPagamento(metodo: MetodoPagamento): void {
        metodo.pagar(this.valor);
    }
}

const compra = new Compra(200);
compra.realizarPagamento(new CartaoCredito());