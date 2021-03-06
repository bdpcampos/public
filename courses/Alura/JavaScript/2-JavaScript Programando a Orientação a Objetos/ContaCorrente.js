import {Cliente} from "./Cliente.js"

export class ContaCorrente {

    static numeroDeContas = 0; //Atributo estático, pertencente a classe como um todo e não a um objeto em específico.

    constructor(agencia, cliente) {
        this._agencia = agencia;
        this.cliente = cliente; //usando o setter do _cliente no construtor
        ContaCorrente.numeroDeContas++;
    }

    _agencia;

        get agencia(){
            return this._agencia;
        }

    _cliente;

        get cliente(){
            return this._cliente;
        }

        set cliente(novoCliente) {
            if(novoCliente instanceof Cliente){
                this._cliente = novoCliente;
            }
        }

    _saldo = 0;  //# indicates private variables, but not official yet, so still using _

        get saldo(){
            return this._saldo;
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