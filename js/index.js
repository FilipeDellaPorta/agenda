import { atualizarCabecalho } from './AtualizarCabecalho.js';
import { criarAgenda } from './CriarAgenda.js';
import { btnAnterior, btnProximo } from './Navegacao.js';
import { dataAtual } from './Data.js';

// Inicializar
atualizarCabecalho(dataAtual);
criarAgenda(dataAtual);
btnAnterior(dataAtual);
btnProximo(dataAtual);
