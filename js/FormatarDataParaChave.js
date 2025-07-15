// Função para formatar data como chave
export function formatarDataParaChave(date) {
  return date.toISOString().split('T')[0]; // formato YYYY-MM-DD
}
