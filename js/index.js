import { atualizarCabecalho } from './AtualizarCabecalho.js';
import { criarAgendaParaData } from './CriarAgenda.js';
import { btnAnterior, btnProximo } from './Navegacao.js';

let dataAtual = new Date();

// Inicializar
carregarAgenda();
btnAnterior(dataAtual);
btnProximo(dataAtual);

// Carrega a agenda de hoje inicialmente
export function carregarAgenda() {
  atualizarCabecalho(dataAtual);
  criarAgendaParaData(dataAtual);
}
