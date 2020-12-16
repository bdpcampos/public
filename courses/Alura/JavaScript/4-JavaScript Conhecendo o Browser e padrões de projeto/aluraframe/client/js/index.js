/*  Import declaration  */

import { NegociacaoController } from "./app/controllers/NegociacaoController.js"


/*  Variable declaration  */

const formulario = document.querySelector(".form");
const botaoApagar = document.querySelector("#apagar");
const botaoImportar= document.querySelector("#importar");
const botaoExportar= document.querySelector("#exportar");
const negociacaoView = document.querySelector("#negociacoesView")


/*  Object instantiation  */

const negociacaoController = new NegociacaoController();


/*  Event Listener declaration  */

formulario.addEventListener("submit", evento => negociacaoController.adicionarNegociacao(evento));
botaoApagar.addEventListener("click", evento => negociacaoController.apagarNegociacoes(evento));
botaoImportar.addEventListener("click", evento => negociacaoController.importarNegociacoes(evento));
botaoExportar.addEventListener("click", evento => negociacaoController.exportarNegociacoes(evento));
negociacaoView.addEventListener("click", evento => eventoNegociacaoView(evento));


/*  Function declaration  */

function eventoNegociacaoView(evento) {

    switch (evento.target.id) {
        case 'thData':
            negociacaoController.ordenarListaNegociacoes('data');
            break;
        case 'thQuantidade':
            negociacaoController.ordenarListaNegociacoes('quantidade');
            break;
        case 'thValor':
            negociacaoController.ordenarListaNegociacoes('valor');
            break;
        case 'thVolume':
            negociacaoController.ordenarListaNegociacoes('volume');
            break;
        default: 
            break;
    }
}


/*  Procedural code  */
