import { diasSemana, meses } from './MesesESemanas.js';

// Atualiza o cabeçalho com base na data
export function atualizarCabecalho(dataAtual) {
  const dia = dataAtual.getDate();
  const mesIndex = dataAtual.getMonth();
  const diaSemanaIndex = dataAtual.getDay();

  document.querySelector('.dia-central').textContent = dia;
  document.querySelector(
    '.mes-estrangeiro'
  ).textContent = `${meses.es[mesIndex]} / ${meses.en[mesIndex]}`;
  document.querySelector('.dia-estrangeiro').textContent =
    diasSemana.en[diaSemanaIndex];
  document.querySelector('.mes-portugues').textContent = meses.pt[mesIndex];
  document.querySelector('.dia-portugues').textContent =
    diasSemana.pt[diaSemanaIndex];
}
