/*  Import declaration  */

import { NegociacaoController } from "../controllers/NegociacaoController.js"
import { DateHelper } from "../helpers/DateHelper.js"


/*  Variable declaration  */

const formulario = document.querySelector(".form");
const campoData = document.querySelector("#data");
const campoQuantidade = document.querySelector("#quantidade");
const campoValor = document.querySelector("#valor");


/*  Object instantiation  */

const negociacaoController = new NegociacaoController();


/*  Event Listener declaration  */

formulario.addEventListener("submit", evento => negociacaoController.adicionarNegociacao(evento));


/*  Procedural code  */

negociacaoController.limparFormulario();