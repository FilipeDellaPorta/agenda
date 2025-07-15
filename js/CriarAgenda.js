import { formatarDataParaChave } from './FormatarDataParaChave.js';
const container = document.getElementById('agenda-container');

// Cria as 26 linhas para aquele dia
export function criarAgendaParaData(date) {
  container.innerHTML = ''; // limpa o conteúdo atual
  const chave = formatarDataParaChave(date);

  for (let i = 0; i < 26; i++) {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = `Linha ${i + 1}`;
    input.classList.add('linha-agenda');

    const valorSalvo = localStorage.getItem(`${chave}-linha-${i}`);
    if (valorSalvo) {
      input.value = valorSalvo;
    }

    input.addEventListener('input', () => {
      localStorage.setItem(`${chave}-linha-${i}`, input.value);
    });

    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        const proximo = container?.children[i + 1];
        if (proximo instanceof HTMLElement) proximo.focus();
        else input.blur();
      }
    });

    container.appendChild(input);
  }
}
