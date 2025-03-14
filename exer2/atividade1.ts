abstract class Funcionario {
    constructor(public nome: string, public salario: number) {}

    abstract calcularVencimentos(): number;
}

class FuncionarioEfetivo extends Funcionario {
    constructor(nome: string, salario: number, public bonusAnual: number) {
        super(nome, salario);
    }

    calcularVencimentos(): number {
        return this.salario + this.bonusAnual;
    }
}

class FuncionarioTerceirizado extends Funcionario {
    constructor(nome: string, salario: number, public custoPorProjeto: number) {
        super(nome, salario);
    }

    calcularVencimentos(): number {
        return this.salario + this.custoPorProjeto;
    }
}

// exemplo
const efetivo = new FuncionarioEfetivo("Alice", 5000, 1000);
const terceirizado = new FuncionarioTerceirizado("Bob", 4000, 500);

console.log(`${efetivo.nome} - Vencimentos: R$${efetivo.calcularVencimentos()}`);
console.log(`${terceirizado.nome} - Vencimentos: R$${terceirizado.calcularVencimentos()}`);
