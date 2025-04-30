// Componente
abstract class Graphic {
    abstract draw(): void;
  }
  
  // Folha
  class CompositeCircle extends Graphic {
    draw(): void {
      console.log("Desenhando um círculo.");
    }
  }
  
  // Composto
  class CompositeGraphic extends Graphic {
    private children: Graphic[] = [];
  
    add(child: Graphic): void {
      this.children.push(child);
    }
  
    remove(child: Graphic): void {
      this.children = this.children.filter(c => c !== child);
    }
  
    draw(): void {
      this.children.forEach(child => child.draw());
    }
  }
  
  // Uso
  const circle1 = new CompositeCircle();
  const circle2 = new CompositeCircle();
  
  const composite = new CompositeGraphic();
  composite.add(circle1);
  composite.add(circle2);
  
  composite.draw();
