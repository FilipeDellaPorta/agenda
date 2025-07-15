import { carregarAgenda } from './CarregarAgenda.js';
import { dataAtual } from './DataAtual.js';

// Inicializar
carregarAgenda();

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
