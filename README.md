# 📅 Agenda Diária com Navegação

Este é um projeto front-end simples de uma **agenda digital** onde o usuário pode:

- Preencher até **26 linhas de anotações por dia**;
- Navegar entre os dias com botões de **"Dia anterior"** e **"Dia seguinte"**;
- Armazenar as informações localmente usando o **LocalStorage** do navegador;
- Visualizar um cabeçalho com o **número do dia** centralizado e o **nome do mês e dia da semana em três idiomas** (português, espanhol e inglês).

---

## ✨ Funcionalidades

- Mobile First;
- Inputs com apenas `border-bottom`, simulando uma folha de caderno;
- Cabeçalho dinâmico com a data atual;
- Paginação diária (cada dia é uma “página”);
- Armazenamento separado por data (ex: `2025-07-15-linha-0`);
- Foco automático no próximo campo ao pressionar `Enter`.

---

## 📁 Estrutura de arquivos

```text
📁 agenda/
├── index.html
├── css/
│   └── agenda.css
│   └── cabecalho.css
│   └── navegacao.css
└── js/
    ├── AtualizarCabecalho.js
    ├── CriarAgenda.js
    ├── DataAtual.js
    ├── FormatarDataParaChave.js
    ├── index.js
    └── MesesESemanas.js

---

## 🧠 Tecnologias utilizadas

- HTML5
- CSS3 (com foco em `flexbox`)
- JavaScript (ES6+)
- LocalStorage

---

🧑‍💻 Autor
Desenvolvido por Filipe Della Porta com apoio do ChatGPT 🤖✨
