
abstract class Veiculo {
    constructor(public modelo: string, public capacidade: number) {}

    abstract calcularConsumo(distancia: number): number;
}

class Onibus extends Veiculo {
    constructor(modelo: string, capacidade: number, public consumoPorKm: number) {
        super(modelo, capacidade);
    }

    calcularConsumo(distancia: number): number {
        return distancia * this.consumoPorKm;
    }
}

class Taxi extends Veiculo {
    constructor(modelo: string, capacidade: number, public consumoPorKmPorPassageiro: number) {
        super(modelo, capacidade);
    }

    calcularConsumo(distancia: number, numeroDePassageiros: number = 1): number {
        return distancia * this.consumoPorKmPorPassageiro * numeroDePassageiros;
    }
}

// exempl
const onibus = new Onibus("Mercedes", 50, 0.5);
console.log(`${onibus.modelo} - Consumo para 100 km: ${onibus.calcularConsumo(100)} litros`);

const taxi = new Taxi("Toyota", 4, 0.2);
console.log(`${taxi.modelo} - Consumo para 100 km com 3 passageiros: ${taxi.calcularConsumo(100, 3)} litros`);
console.log(`${taxi.modelo} - Consumo para 100 km com 1 passageiro (padrão): ${taxi.calcularConsumo(100)} litros`);
