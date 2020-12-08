/*  Import declaration  */

import { Negociacao } from "../models/Negociacao.js"


/*  Class declaration  */

export class NegociacaoService {

    static obterNegociacoesDaSemana(callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'negociacoes/semana');
        xhr.onreadystatechange = () => {
            /*
            0: requisição ainda nao iniciada
            1: conexão com o servidor estabelecida
            2: requisição recebida
            3: processando requisição
            4: requisição concluída e a resposta está pronta
            */
           if(xhr.readyState === 0) {console.log('0: requisição ainda nao iniciada')}// Para testar
           if(xhr.readyState === 1) {console.log('1: conexão com o servidor estabelecida')}// Para testar
           if(xhr.readyState === 2) {console.log('3: processando requisição')}// Para testar
           if(xhr.readyState === 3) {console.log('0: requisição ainda nao iniciada')}// Para testar

            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    callback(null, JSON.parse(xhr.responseText)
                    .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                    console.log('4: requisição concluída e a resposta está pronta')// Para testar
                } else {
                    console.log(xhr.responseText);
                    callback('Não foi possível obter as negociações do servidor!', null);
                }
            }
        };
        xhr.send();
    }

    static enviarNegociacao(negociacao) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/negociacoes');
        xhr.setRequestHeader('Content-type', 'application/json');

        const negociacaoLiteral = {
            data: negociacao.data,
            quantidade: negociacao.quantidade,
            valor: negociacao.valor
        }
        xhr.send(JSON.stringify(negociacaoLiteral));
        xhr.onload = function() {
            console.log(xhr.responseText);
        }

    }

}