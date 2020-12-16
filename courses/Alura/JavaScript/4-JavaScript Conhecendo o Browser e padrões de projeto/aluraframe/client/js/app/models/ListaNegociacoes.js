/*  Import declaration  */


/*  Class declaration  */

export class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
    }


    get negociacoes() {
        return [].concat(this._negociacoes);//Programação defensiva, quem solicitar o array negociacoes vai receber uma cópia do array da propriedade _negociacoes, assim se for alterado, não altera a propriedade original da classe.
    }

    get volumeTotal() {
        return this.negociacoes.reduce((total,item) => total + item.volume, 0.0)
    }


    adicionar(negociacao) {
        this._negociacoes.push(negociacao);
    }
    
    esvaziar() {
        this._negociacoes = [];
    }

    ordenar(criterio) {
        this._negociacoes.sort(criterio);
    }

    inverterOrdem() {
        this._negociacoes.reverse();
    }
}