/*  Import declaration  */

import { Negociacao } from "../models/Negociacao.js"
import { ListaNegociacoes } from "../models/ListaNegociacoes.js"
import { NegociacoesView } from "../views/NegociacoesView.js"
import { AlertaController } from "../controllers/AlertaController.js"
import { NegociacaoService } from "../services/NegociacaoService.js"
import { DateHelper } from "../helpers/DateHelper.js"
import { Bind } from "../helpers/Bind.js"


/*  Class declaration  */

export class NegociacaoController {

    constructor() {
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(), 
            new NegociacoesView(document.querySelector('#negociacoesView')), 
            'adicionar', 'esvaziar');

        this._alerta = new AlertaController();

        this.limparFormulario(); //Ao instanciar a classe no index.js ele já exibe o formulario nas condições iniciais.
    }


    adicionarNegociacao(event) {
        event.preventDefault();

        //Retorna erro se a data é futura.
        if (DateHelper.ehDataFutura(DateHelper.textoParaData(this._inputData.value))) {
            const mensagem = 'A data da negociação não pode ser futura!';
            this._alerta.cuidado(mensagem);
            this.limparFormulario();
            throw new Error(mensagem);
        }

        this._listaNegociacoes.adicionar(this._criarNegociacao());
        this._alerta.sucesso('Negociação cadastrada com sucesso!');
        this.limparFormulario();
    }

    importarNegociacoes(event) {
        NegociacaoService.obterNegociacoesDaSemana((error, negociacoes) =>{
            if(error) {
                this._alerta.perigo(error);
                return;
            }

            negociacoes.forEach(negociacao => this._listaNegociacoes.adicionar(negociacao));
            this._alerta.sucesso('Negociações importadas com sucesso!');
        });
    }

    exportarNegociacoes(event) {
        event.preventDefault();

        NegociacaoService.enviarNegociacao(this._criarNegociacao());
    }

    apagarNegociacoes(event) {
        this._listaNegociacoes.esvaziar();
        this._alerta.informacao('Negociações apagadas com sucesso!');
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