import { Carro } from "./Carro";

export class CarroBuilder {
    private carro: Carro;

    constructor() {
        this.carro = new Carro();
    }

    setMotor(motor: string): this {
        this.carro.motor = motor;
        return this;
    }

    setCor(cor: string): this {
        this.carro.cor = cor;
        return this;
    }

    setAno(ano: number): this {
        this.carro.ano = ano;
        return this;
    }

    build(): Carro {
        return this.carro;
    }
}
