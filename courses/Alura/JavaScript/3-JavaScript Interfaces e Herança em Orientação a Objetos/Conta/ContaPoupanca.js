import { Conta } from './Conta.js';

export class ContaPoupanca extends Conta {

    constructor(saldoInicial, agencia, cliente) {
        super(saldoInicial, agencia, cliente); //chama o construtor da classe superior
    }

    sacar(valor) {
        const taxa = 1.02;
        return super._sacar(valor, taxa);
    }
}