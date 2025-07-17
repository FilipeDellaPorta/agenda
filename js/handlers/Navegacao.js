import { atualizarCabecalho } from '../dom/AtualizarCabecalho.js';
import { criarAgenda } from '../dom/CriarAgenda.js';

// Navegação
export function btnAnterior(dataAtual) {
  const btnAnterior = document.getElementById('anterior');
  btnAnterior.addEventListener('click', () => {
    dataAtual.setDate(dataAtual.getDate() - 1);
    atualizarCabecalho(dataAtual);
    criarAgenda(dataAtual);
  });
}

export function btnProximo(dataAtual) {
  const btnProximo = document.getElementById('proximo');
  btnProximo.addEventListener('click', () => {
    dataAtual.setDate(dataAtual.getDate() + 1);
    atualizarCabecalho(dataAtual);
    criarAgenda(dataAtual);
  });
}
