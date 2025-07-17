// Gerenciando a localStorage
export function pegandoDaLocalStorage(input, i, chave) {
  const valorSalvo = localStorage.getItem(`${chave}-linha-${i}`);
  if (valorSalvo) {
    input.value = valorSalvo;
  }
}

export function salvandoNaLocalStorage(input, i, chave) {
  input.addEventListener('input', () => {
    localStorage.setItem(`${chave}-linha-${i}`, input.value);
  });
}
