import { DepartamentoA, FuncionarioA, SistemaRHA } from "./SistemaRHA";
import { HRSystemB } from "./SistemaRHB";
import { AdaptadorSistemaBParaA } from "./SistemaRHAdaptador";

console.log("=== DEMONSTRAÇÃO DO ADAPTADOR DE SISTEMAS DE RH ===");

// Instancia os sistemas
const sistemaA = new SistemaRHA();
const sistemaB = new HRSystemB();

const adaptador = new AdaptadorSistemaBParaA(sistemaB);

console.log("1. Listando funcionários originais do Sistema A:");
console.log(sistemaA.listarFuncionarios());

console.log("2. Listando funcionários do Sistema B como se fossem do Sistema A:");
console.log(adaptador.listarFuncionariosComoA());

console.log("3. Adicionando um novo funcionário no Sistema B via Adaptador:");
const novoFuncionario: FuncionarioA = {
  id: 101,
  nome: "Carlos",
  sobrenome: "Almeida",
  dataContratacao: new Date("2022-08-01"),
  cargo: "Designer UX",
  departamento: DepartamentoA.MARKETING,
  salario: 7200,
  statusAtivo: true,
};
adaptador.adicionarFuncionarioComoA(novoFuncionario);

console.log("4. Funcionários do Sistema B após adição:");
console.log(adaptador.listarFuncionariosComoA());

