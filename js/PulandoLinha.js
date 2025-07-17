// Pulando linha após salvar na localStorage
export function pulandoLinha(input, container, i) {
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const proximo = container?.children[i + 1];
      if (proximo instanceof HTMLElement) proximo.focus();
      else input.blur();
    }
  });
}
