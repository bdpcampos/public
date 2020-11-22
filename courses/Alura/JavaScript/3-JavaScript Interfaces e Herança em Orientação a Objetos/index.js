import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js"


const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Ana", 88822233309);


const conta1 = new ContaCorrente(1001, cliente1);
const conta2 = new ContaCorrente(1001, cliente2);


conta1.depositar(100);
conta1.sacar(50);


conta1.transferir(20, conta2);


const contaPoupanca = new ContaPoupanca(50, 1001, cliente1);

console.log(contaPoupanca);


