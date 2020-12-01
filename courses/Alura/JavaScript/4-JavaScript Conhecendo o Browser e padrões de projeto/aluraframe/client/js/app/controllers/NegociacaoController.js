/*  Import declaration  */

import { Negociacao } from "../models/Negociacao.js"
import { ListaNegociacoes } from "../models/ListaNegociacoes.js"
import { DateHelper } from "../helpers/DateHelper.js"


/*  Class declaration  */

export class NegociacaoController {

    constructor() {
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
    }


    adicionarNegociacao(event) {
        event.preventDefault();
        alert('Negociação cadastrada');
        
        this._listaNegociacoes.adicionar(this._criarNegociacao());
        this.limparFormulario();

          
    }

    _criarNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            Number(this._inputQuantidade.value),
            Number(this._inputValor.value)
        );
    }

    limparFormulario() {
        this._inputData.value = DateHelper.dataHojeParaCampo();
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}