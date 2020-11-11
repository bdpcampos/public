
class Cliente {
    
    nome;
    cpf;

}

class ContaCorrente {

    agencia = 1001;
    #saldo = 0;  //# indicates private variables


    depositar(valor) {
        if(valor <= 0) return;   //Early return technic, first does the not checks and if it passes trough does the main code.

        this.#saldo += valor;
        return valor;
    }

    sacar(valor) {
        if(this.#saldo < valor) return;   //Early return technic, first does the not checks and if it passes trough does the main code.

        this.#saldo -= valor;
        return valor;
    }

}



const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Ana";
cliente2.cpf = 88822233309;


const contaCorrenteRicardo = new ContaCorrente();
const contaCorrenteAna = new ContaCorrente();


const valorDeposito = contaCorrenteRicardo.depositar(100);
const valorSaque = contaCorrenteRicardo.sacar(50);


console.log(contaCorrenteRicardo);
console.log(valorDeposito);
console.log(valorSaque);
