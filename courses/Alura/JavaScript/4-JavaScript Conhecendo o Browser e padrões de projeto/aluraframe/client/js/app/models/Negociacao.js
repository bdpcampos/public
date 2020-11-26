import *  as DateLib from '../../lib/date.js';

export class Negociacao {

    constructor(data, quantidade, valor) {
        this._data = new Date(this._data.getTime());//Programação defensiva, no construtor a propriedade já recebe uma cópia da data, assim se a variável que foi passada no construtor for alterada, não altera a propriedade.
        this._quantidade = quantidade;
        this._valor = valor;

        Object.freeze(this); //Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
    }

    get data() {
        return new Date(this._data.getTime()); //Programação defensiva, quem solicitar a data vai receber uma cópia do objeto data, assim se for alterado, não altera a propriedade _data da negociação.
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }

}