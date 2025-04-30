// Interface de Implementação
interface Renderer {
    renderShape(shape: string): void;
  }
  
  // Implementações Concretas
  class VectorRenderer implements Renderer {
    renderShape(shape: string): void {
      console.log(`Desenhando ${shape} como vetores.`);
    }
  }
  
  class RasterRenderer implements Renderer {
    renderShape(shape: string): void {
      console.log(`Desenhando ${shape} como pixels.`);
    }
  }
  
  // Abstração
  abstract class Shape {
    constructor(protected renderer: Renderer) {}
  
    abstract draw(): void;
  }
  
  // Abstrações Refinadas
  class BridgeCircle extends Shape {
    draw(): void {
      this.renderer.renderShape("círculo");
    }
  }
  
  class Square extends Shape {
    draw(): void {
      this.renderer.renderShape("quadrado");
    }
  }
  
  // Uso
  const vector = new VectorRenderer();
  const raster = new RasterRenderer();
  
  const circle = new BridgeCircle(vector);
  circle.draw(); 
  
  const square = new Square(raster);
  square.draw(); 
  