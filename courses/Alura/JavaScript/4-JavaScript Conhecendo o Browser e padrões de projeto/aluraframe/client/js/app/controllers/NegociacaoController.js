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
            'adicionar', 'esvaziar', 'ordenar', 'inverterOrdem');

        this._negociacaoService = new NegociacaoService();

        this._alerta = new AlertaController();

        this.limparFormulario(); //Ao instanciar a classe no index.js ele já exibe o formulario nas condições iniciais.

        this._ordemAtual = ''; // quando a página for carregada, não tem critério. Só passa a ter quando ele começa a clicar nas colunas
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

    importarNegociacoes() {

        Promise.all([
            this._negociacaoService.obterNegociacoesDaSemana(),
            this._negociacaoService.obterNegociacoesDaSemanaAnterior(),
            this._negociacaoService.obterNegociacoesDaSemanaRetrasada()

        ]).then(negociacoes => {
            negociacoes
            .reduce((arrayUnico, array) => arrayUnico.concat(array),[]) //Faz os 3 arrays retornados, cada um de uma promise, virar um único array para ser iterado por foreach
            .forEach(negociacao => this._listaNegociacoes.adicionar(negociacao));
            this._alerta.sucesso('Negociações importadas com sucesso!');

        }).catch(error => {
            this._alerta.perigo(error);
        });
    }

    exportarNegociacoes(event) {
        event.preventDefault();

        this._negociacaoService.enviarNegociacao(this._criarNegociacao())
        .then(mensagem => {
            this._alerta.sucesso(mensagem);
            this.limparFormulario();
        })
        .catch(error => this._alerta.perigo(error))
    }

    apagarNegociacoes() {
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

    ordenarListaNegociacoes(coluna) {
        if(this._ordemAtual === coluna) {
            this._listaNegociacoes.inverterOrdem();
        } else {
            this._listaNegociacoes.ordenar((a,b) => a[coluna] - b[coluna]);
        }

        this._ordemAtual = coluna;
    }
}