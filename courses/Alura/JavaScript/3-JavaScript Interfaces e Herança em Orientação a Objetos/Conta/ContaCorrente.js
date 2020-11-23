import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0; //Atributo estático, pertencente a classe como um todo e não a um objeto em específico.

    constructor(agencia, cliente) {
        super(0, agencia, cliente); //chama o construtor da classe superior
        ContaCorrente.numeroDeContas++;
    }

    sacar(valor) {
        const taxa = 1.1;
        return super._sacar(valor, taxa);
    }
}