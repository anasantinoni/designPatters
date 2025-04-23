import { DepartamentoA, FuncionarioA } from "./SistemaRHA";
import { EmployeeB, HRSystemB } from "./SistemaRHB";

// Mapeamento entre divisões do Sistema B e departamentos do Sistema A
const mapaDivisaoParaDepartamentoA: Record<string, DepartamentoA> = {
  "Information Technology": DepartamentoA.TI,
  "Human Resources": DepartamentoA.RH,
  "Finance": DepartamentoA.FINANCEIRO,
  "Marketing": DepartamentoA.MARKETING,
  "Operations": DepartamentoA.OPERACOES,
};

export class AdaptadorSistemaBParaA {
  constructor(private sistemaB: HRSystemB) {}

  // Converte um funcionário do sistema B para o formato do sistema A
  private converterEmployeeBParaFuncionarioA(employee: EmployeeB): FuncionarioA {
    return {
      id: parseInt(employee.employeeId.replace(/\D/g, "")), // extrai apenas os números
      nome: employee.personalInfo.firstName,
      sobrenome: employee.personalInfo.lastName,
      dataContratacao: new Date(employee.employmentDetails.startDate),
      cargo: employee.employmentDetails.position,
      departamento: mapaDivisaoParaDepartamentoA[employee.employmentDetails.division] || DepartamentoA.OPERACOES,
      salario: employee.employmentDetails.compensation.baseSalary,
      statusAtivo: employee.status === "ACTIVE",
    };
  }

  // Lista todos os funcionários do Sistema B, no formato do Sistema A
  listarFuncionariosComoA(): FuncionarioA[] {
    return this.sistemaB.getAllEmployees().map(this.converterEmployeeBParaFuncionarioA.bind(this));
  }

  // Adiciona um funcionário no Sistema B a partir de dados do Sistema A
  adicionarFuncionarioComoA(funcionarioA: FuncionarioA): void {
    const employeeB: EmployeeB = {
      employeeId: `EMP-${funcionarioA.id}`,
      personalInfo: {
        firstName: funcionarioA.nome,
        lastName: funcionarioA.sobrenome,
      },
      employmentDetails: {
        startDate: funcionarioA.dataContratacao.toISOString().split("T")[0],
        position: funcionarioA.cargo,
        team: funcionarioA.departamento.toString(), // simplificação
        division: Object.entries(mapaDivisaoParaDepartamentoA).find(([_, dep]) => dep === funcionarioA.departamento)?.[0] || "Operations",
        compensation: {
          baseSalary: funcionarioA.salario,
          currency: "BRL",
          bonusEligible: false, // default
        },
      },
      status: funcionarioA.statusAtivo ? "ACTIVE" : "INACTIVE",
    };

    this.sistemaB.addEmployee(employeeB);
  }
}
