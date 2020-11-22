import {Cliente} from "./Cliente.js"

export class ContaPoupanca {

    constructor(saldoInicial, agencia, cliente){
        this._saldo = saldoInicial;
        this._agencia = agencia;
        this._cliente = cliente;
    }


    depositar(valor) {
        if(valor <= 0) return;   //Early return technic, first does the not checks and if it passes trough does the main code.

        this._saldo += valor;
        return valor;
    }

    sacar(valor) {
        if(this._saldo < valor) return;   //Early return technic, first does the not checks and if it passes trough does the main code.

        this._saldo -= valor;
        return valor;
    }

    transferir(valor, conta) {

        const valorSacado = this.sacar(valor);

        conta.depositar(valorSacado);
    }
}