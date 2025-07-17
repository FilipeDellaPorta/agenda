export function subirJSONDaAgenda() {
  const inputUpload = document.getElementById('inputUpload');

  inputUpload.addEventListener('change', (evento) => {
    const arquivo = evento.target.files[0];
    if (!arquivo) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const conteudo = e.target.result;
        const dados = JSON.parse(conteudo);

        for (const data in dados) {
          const tarefas = dados[data];
          tarefas.forEach((tarefa, linha) => {
            if (tarefa !== undefined && tarefa !== null && tarefa !== '') {
              const chave = `${data}-linha-${linha}`;
              localStorage.setItem(chave, tarefa);
            }
          });
        }

        alert('Agenda restaurada com sucesso!');
        location.reload(); // recarrega a página para atualizar a visualização
      } catch (erro) {
        alert('Erro ao ler o arquivo JSON: ' + erro.message);
      }
    };

    reader.readAsText(arquivo);
  });
}
