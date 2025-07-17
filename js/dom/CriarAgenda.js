import { formatarDataParaChave } from '../utils/FormatarDataParaChave.js';
import { pulandoLinha } from '../handlers/PulandoLinha.js';
import {
  pegandoDaLocalStorage,
  salvandoNaLocalStorage,
} from '../services/LocalStorage.js';

const container = document.getElementById('agenda-container');

// Cria as 26 linhas para aquele dia
export function criarAgenda(dataAtual) {
  container.innerHTML = ''; // limpa o conteúdo atual
  for (let i = 0; i < 26; i++) {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = `Linha ${i + 1}`;
    input.classList.add('linha-agenda');
    const chave = formatarDataParaChave(dataAtual);
    pegandoDaLocalStorage(input, i, chave);
    salvandoNaLocalStorage(input, i, chave);
    pulandoLinha(input, container, i);
    container.appendChild(input);
  }
}
