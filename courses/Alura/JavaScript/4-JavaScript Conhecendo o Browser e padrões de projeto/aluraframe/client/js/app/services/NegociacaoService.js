/*  Import declaration  */

import { Negociacao } from "../models/Negociacao.js"
import { HttpService } from "../services/HttpService.js"


/*  Class declaration  */

export class NegociacaoService {

    constructor() {
        this._http = new HttpService();
    }

    
    obterNegociacoesDaSemana() {

        return new Promise((resolve, reject) => {

            this._http.get('negociacoes/semana')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(error => {
                    console.log(error);
                    reject('Não foi possível obter as negociações da semana do servidor!');
                });
        });
    }

    obterNegociacoesDaSemanaAnterior() {

        return new Promise((resolve, reject) => {

            this._http.get('negociacoes/anterior')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(error => {
                    console.log(error);
                    reject('Não foi possível obter as negociações da semana anterior do servidor!');
                });
        });
    }

    obterNegociacoesDaSemanaRetrasada() {

        return new Promise((resolve, reject) => {

            this._http.get('negociacoes/retrasada')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                })
                .catch(error => {
                    console.log(error);
                    reject('Não foi possível obter as negociações da semana retrasada do servidor!');
                });
        });
    }


    enviarNegociacao(negociacao) {

        return new Promise((resolve, reject) => {

            const negociacaoLiteral = {
                data: negociacao.data,
                quantidade: negociacao.quantidade,
                valor: negociacao.valor
            }

            this._http.post('/negociacoes', negociacaoLiteral)
                .then(resposta => {
                    console.log(resposta);
                    resolve('Negociação enviada com sucesso!')
                })
                .catch(error => {
                    console.log(error);
                    reject('Não foi possível enviar a negociação para o servidor!');
                });
        });
    }
}
