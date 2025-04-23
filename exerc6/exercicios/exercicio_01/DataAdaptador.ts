import { DataLocal } from "./DataLocal";
import { DataExterna } from "./DataExterna";

// Adaptador que faz DataExterna se comportar como DataLocal
export class DataAdapter extends DataLocal {
  private dataExterna: DataExterna;

  constructor(dataExterna: DataExterna) {
    // Converte para o formato esperado por DataLocal: "DD/MM/YYYY"
    const dia = dataExterna.getDia();
    const mes = dataExterna.getMes();
    const ano = dataExterna.getAno();
    const dataFormatada = `${dia}/${mes}/${ano}`;

    super(dataFormatada);
    this.dataExterna = dataExterna;
  }

  // Se precisar acessar a instância original
  getDataExternaOriginal(): DataExterna {
    return this.dataExterna;
  }
}
