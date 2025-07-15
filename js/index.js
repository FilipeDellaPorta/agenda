import { atualizarCabecalho } from './AtualizarCabecalho.js';
import { criarAgendaParaData } from './CriarAgenda.js';
import { dataAtual } from './DataAtual.js';

// Inicializar
carregarAgenda();

// Carrega a agenda de hoje inicialmente
export function carregarAgenda() {
  atualizarCabecalho(dataAtual);
  criarAgendaParaData(dataAtual);
}

// Navegação
const btnAnterior = document.getElementById('anterior');
const btnProximo = document.getElementById('proximo');

btnAnterior.addEventListener('click', () => {
  dataAtual.setDate(dataAtual.getDate() - 1);
  carregarAgenda();
});

btnProximo.addEventListener('click', () => {
  dataAtual.setDate(dataAtual.getDate() + 1);
  carregarAgenda();
});
