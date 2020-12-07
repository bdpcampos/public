/*  Import declaration  */

import { NegociacaoController } from "./app/controllers/NegociacaoController.js"


/*  Variable declaration  */

const formulario = document.querySelector(".form");
const botaoApagar = document.querySelector("#apagar");


/*  Object instantiation  */

const negociacaoController = new NegociacaoController();


/*  Event Listener declaration  */

formulario.addEventListener("submit", evento => negociacaoController.adicionarNegociacao(evento));
botaoApagar.addEventListener("click", evento => negociacaoController.apagarNegociacoes(evento));

/*  Procedural code  */

