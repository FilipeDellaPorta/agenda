import { atualizarCabecalho } from './AtualizarCabecalho.js';
import { criarAgenda } from './CriarAgenda.js';
import { btnAnterior, btnProximo } from './Navegacao.js';
import { dataAtual } from './Data.js';
import { baixarJSONDaAgenda } from './BaixarJSONDaAgenda.js';
import { subirJSONDaAgenda } from './SubirJSONDaAgenda.js';

// Inicializar
atualizarCabecalho(dataAtual);
criarAgenda(dataAtual);
btnAnterior(dataAtual);
btnProximo(dataAtual);
baixarJSONDaAgenda();
subirJSONDaAgenda();
