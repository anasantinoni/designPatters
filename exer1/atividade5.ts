class Retanguloo {
    constructor(private largura: number, private altura: number) {}

    calcularArea(): number {
        return this.largura * this.altura;
    }

    calcularPerimetro(): number {
        return 2 * (this.largura + this.altura);
    }
}

class Circulo {
    constructor(private raio: number) {}

    calcularArea(): number {
        return Math.PI * this.raio * this.raio;
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.raio;
    }
}

const ret = new Retanguloo(10, 5);
console.log(`Área do Retângulo: ${ret.calcularArea()}`);
console.log(`Perímetro do Retângulo: ${ret.calcularPerimetro()}`);

const circ = new Circulo(7);
console.log(`Área do Círculo: ${circ.calcularArea()}`);
console.log(`Perímetro do Círculo: ${circ.calcularPerimetro()}`);