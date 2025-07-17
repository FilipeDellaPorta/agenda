export function subirJSONDaAgenda() {
  const inputUpload = document.getElementById('inputUpload');
  const btnUpload = document.getElementById('btnUpload');

  // Simula o clique no input
  btnUpload.addEventListener('click', () => {
    inputUpload.click();
  });

  // Lê o arquivo selecionado
  inputUpload.addEventListener('change', (evento) => {
    const arquivo = evento.target.files[0];
    if (!arquivo) return;

    // Lê o conteúdo do arquivo com FileReader
    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const conteudo = e.target.result;
        const dados = JSON.parse(conteudo);

        // Salva os dados no localStorage
        for (const data in dados) {
          const tarefas = dados[data];
          tarefas.forEach((tarefa, linha) => {
            if (tarefa !== undefined && tarefa !== null && tarefa !== '') {
              const chave = `${data}-linha-${linha}`;
              localStorage.setItem(chave, tarefa);
            }
          });
        }

        // Finaliza
        alert('Agenda restaurada com sucesso!');
        location.reload(); // recarrega a página para atualizar a visualização
      } catch (erro) {
        alert('Erro ao ler o arquivo JSON: ' + erro.message);
      }
    };

    reader.readAsText(arquivo); // isso ativa o reader.onload quando terminar
  });
}
