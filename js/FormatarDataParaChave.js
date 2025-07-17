// Função para formatar data como chave
export function formatarDataParaChave(data) {
  return data.toISOString().split('T')[0]; // formato YYYY-MM-DD
}
