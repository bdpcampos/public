export class Cliente {

    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }
    
    nome;


    _cpf;

        get cpf() {
            return this._cpf;
        }
}
