import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {

    constructor(agencia, cliente) {
        super(0, agencia, cliente); //chama o construtor da classe superior
    }

    sacar(valor) {
        const taxa = 1.01;
        return super._sacar(valor, taxa);
    }
}