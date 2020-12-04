/*  Import declaration  */

import { Negociacao } from "../models/Negociacao.js"
import { ListaNegociacoes } from "../models/ListaNegociacoes.js"
import { NegociacoesView } from "../views/NegociacoesView.js"
import { AlertaController } from "../controllers/AlertaController.js"
import { DateHelper } from "../helpers/DateHelper.js"


/*  Class declaration  */

export class NegociacaoController {

    constructor() {
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');

        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView(document.querySelector('#negociacoesView'));
        this._alerta = new AlertaController();

        this._negociacoesView.update(this._listaNegociacoes); //Ao instanciar a classe no index.js ele já exibe o estado do model na tela do usuário.

        this.limparFormulario(); //Ao instanciar a classe no index.js ele já exibe o formulario nas condições iniciais.
    }


    adicionarNegociacao(event) {
        event.preventDefault();

        //Retorna erro se a data é futura.
        if(DateHelper.ehDataFutura(DateHelper.textoParaData(this._inputData.value))) {
            const mensagem = 'A data da negociação não pode ser futura!';
            this._alerta.perigo(mensagem);
            this.limparFormulario();
            throw new Error(mensagem);
        } 

        this._listaNegociacoes.adicionar(this._criarNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);
        this._alerta.sucesso('Negociação cadastrada com sucesso!');
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