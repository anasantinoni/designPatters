abstract class ContaBancaria {
    constructor(public numero: number, public saldo: number) {}

    abstract sacar(valor: number): void;
    abstract depositar(valor: number): void;
}

class ContaCorrente extends ContaBancaria {
    constructor(numero: number, saldo: number, public limiteChequeEspecial: number) {
        super(numero, saldo);
    }

    sacar(valor: number): void {
        if (this.saldo + this.limiteChequeEspecial >= valor) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(numero: number, saldo: number, public taxaJuros: number) {
        super(numero, saldo);
    }

    sacar(valor: number): void {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    }

    aplicarJuros(): void {
        const juros = this.saldo * this.taxaJuros;
        this.saldo += juros;
        console.log(`Juros de R$${juros} aplicados. Saldo atual: R$${this.saldo}`);
    }
}

// exemplo 
const cc = new ContaCorrente(123, 1000, 500);
cc.sacar(1200);
cc.depositar(300);

const cp = new ContaPoupanca(456, 2000, 0.01);
cp.aplicarJuros();
cp.sacar(500);
