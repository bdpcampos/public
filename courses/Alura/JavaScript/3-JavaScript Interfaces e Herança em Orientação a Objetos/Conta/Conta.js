//Classe abstrata
export class Conta {

    constructor(saldoInicial, agencia, cliente) {
        if (this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois está é uma classe abstrata"); //Lança um erro ao tentar instanciar esta classe abstrata
        }
        this._saldo = saldoInicial;
        this._agencia = agencia;
        this._cliente = cliente;
    }


    get saldo() {
        return this._saldo;
    }

    get agencia() {
        return this._agencia;
    }

    get cliente() {
        return this._cliente;
    }


    set cliente(novoCliente) {
        if (novoCliente instanceof Cliente) {
            this._cliente = novoCliente;
        }
    }


    depositar(valor) {
        if (valor <= 0) return 0;   //Early return technic, first does the not checks and if it passes trough does the main code.

        this._saldo += valor;
        return valor;
    }

    //Método abstrato
    sacar(valor) {
        throw new Error("O método sacar da conta é abstrato")
        //Vazio pois este método deve ser implementado em todas as classes filhas, cada uma com sua especialização. Ao deixar em branco, se o método for esquecido na implementação, não irá funcionar.
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;

        if (this._saldo < valorSacado) return 0;   //Early return technic, first does the not checks and if it passes trough does the main code.

        this._saldo -= valorSacado;
        return valorSacado;
    }

    transferir(valor, conta) {
        const taxa = 1;

        const valorSacado = this._sacar(valor, taxa);
        conta.depositar(valorSacado);
    }
}