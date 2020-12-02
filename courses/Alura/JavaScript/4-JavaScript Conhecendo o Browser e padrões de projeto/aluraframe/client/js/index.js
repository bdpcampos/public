/*  Import declaration  */

import { NegociacaoController } from "./app/controllers/NegociacaoController.js"


/*  Variable declaration  */

const formulario = document.querySelector(".form");


/*  Object instantiation  */

const negociacaoController = new NegociacaoController();


/*  Event Listener declaration  */

formulario.addEventListener("submit", evento => negociacaoController.adicionarNegociacao(evento));


/*  Procedural code  */

