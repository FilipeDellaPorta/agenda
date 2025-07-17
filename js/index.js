import { atualizarCabecalho } from './dom/AtualizarCabecalho.js';
import { criarAgenda } from './dom/CriarAgenda.js';
import { btnAnterior, btnProximo } from './handlers/Navegacao.js';
import { dataAtual } from './utils/Data.js';
import { baixarJSONDaAgenda } from './handlers/BaixarJSONDaAgenda.js';
import { subirJSONDaAgenda } from './handlers/SubirJSONDaAgenda.js';

// Inicializar
atualizarCabecalho(dataAtual);
criarAgenda(dataAtual);
btnAnterior(dataAtual);
btnProximo(dataAtual);
baixarJSONDaAgenda();
subirJSONDaAgenda();
