import { atualizarCabecalho } from './AtualizarCabecalho.js';
import { criarAgendaParaData } from './CriarAgenda.js';
import { btnAnterior, btnProximo } from './Navegacao.js';

let dataAtual = new Date();

// Inicializar
atualizarCabecalho(dataAtual);
criarAgendaParaData(dataAtual);
btnAnterior(dataAtual);
btnProximo(dataAtual);
