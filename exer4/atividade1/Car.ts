export class Car {
    constructor(public name: string) {}
    play() {
        console.log(`Brincando com o carro ${this.name}`);
    }
}