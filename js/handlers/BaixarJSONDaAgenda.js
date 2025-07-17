import { montarJSONDaAgenda } from '../services/MontarJSONDaAgenda.js';

export function baixarJSONDaAgenda() {
  const btnDownload = document.getElementById('btnDownload');
  btnDownload.addEventListener('click', () => {
    const agendaJSON = montarJSONDaAgenda();
    const jsonString = JSON.stringify(agendaJSON, null, 2);

    // Cria um Blob com o JSON e tipo MIME de texto
    const blob = new Blob([jsonString], { type: 'application/json' });

    // Cria URL para o Blob
    const url = URL.createObjectURL(blob);

    // Cria link temporário para download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'agenda.json';

    // Aciona o download
    a.click();

    // Limpa URL criada
    URL.revokeObjectURL(url);
  });
}
