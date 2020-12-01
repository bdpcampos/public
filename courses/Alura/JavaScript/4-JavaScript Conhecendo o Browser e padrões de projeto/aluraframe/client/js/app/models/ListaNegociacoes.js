/*  Import declaration  */

import { Negociacao } from "../models/Negociacao.js"
import { DateHelper } from "../helpers/DateHelper.js"


/*  Class declaration  */

export class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
    }


    get negociacoes() {
        return [].concat(this._negociacoes);//Programação defensiva, quem solicitar o array negociacoes vai receber uma cópia do array da propriedade _negociacoes, assim se for alterado, não altera a propriedade original da classe.
    }


    adicionar(negociacao) {
        this._negociacoes.push(negociacao);
    }



}