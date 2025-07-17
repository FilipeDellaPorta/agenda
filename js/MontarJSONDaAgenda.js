export function montarJSONDaAgenda() {
  const dados = {};

  for (let i = 0; i < localStorage.length; i++) {
    const chave = localStorage.key(i); // Exemplo: "2025-07-14-linha-1"
    const valor = localStorage.getItem(chave); // Exemplo: "Estudar JavaScript"

    // Verifica se a chave segue o padrão 'YYYY-MM-DD-linha-N'
    if (/^\d{4}-\d{2}-\d{2}-linha-\d+$/.test(chave)) {
      const partes = chave.split('-'); // ["2025", "07", "14", "linha", "1"]
      const data = `${partes[0]}-${partes[1]}-${partes[2]}`; // "2025-07-14"
      const linha = parseInt(partes[4]); // "1" convertido para número

      if (!dados[data]) {
        dados[data] = [];
      }
      dados[data][linha] = valor;
      // {
      //   "2025-07-14": [ "tarefa 0", "tarefa 1", "tarefa 2", ... ],
      //   "2025-07-15": [ "tarefa 0", "tarefa 1", ... ]
      // }
    }
  }

  return dados;
}
