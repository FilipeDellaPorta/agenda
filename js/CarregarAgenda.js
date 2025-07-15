import { atualizarCabecalho } from './AtualizarCabecalho.js';
import { criarAgendaParaData } from './CriarAgenda.js';
import { dataAtual } from './DataAtual.js';

// Carrega a agenda de hoje inicialmente
export function carregarAgenda() {
  atualizarCabecalho(dataAtual);
  criarAgendaParaData(dataAtual);
}
