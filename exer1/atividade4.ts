class Tarefa {
    constructor(private descricao: string, private concluida: boolean = false) {}

    marcarConcluida(): void {
        this.concluida = true;
    }

    exibirDetalhes(): void {
        console.log(`Tarefa: ${this.descricao} - Concluída: ${this.concluida}`);
    }
}

class GerenciadorTarefas {
    private tarefas: Tarefa[] = [];

    adicionarTarefa(descricao: string): void {
        this.tarefas.push(new Tarefa(descricao));
    }

    marcarConcluida(index: number): void {
        if (this.tarefas[index]) {
            this.tarefas[index].marcarConcluida();
        }
    }

    exibirTarefas(): void {
        this.tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}.`);
            tarefa.exibirDetalhes();
        });
    }
}

const gerenciador = new GerenciadorTarefas();
gerenciador.adicionarTarefa("Estudar POO");
gerenciador.adicionarTarefa("Fazer compras");
gerenciador.marcarConcluida(0);
gerenciador.exibirTarefas();