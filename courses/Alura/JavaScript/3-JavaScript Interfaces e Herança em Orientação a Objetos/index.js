import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
/* import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Gerente } from "./Funcionarios/Gerente.js";


const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Ana", 88822233309);

const conta1 = new ContaCorrente(1001, cliente1);
const conta2 = new ContaCorrente(1001, cliente2);

conta1.depositar(100);
conta1.sacar(50);

conta1.transferir(20, conta2);

const contaPoupanca = new ContaPoupanca(50, 1001, cliente1);

const conta3 = new ContaCorrente(1001, cliente1);

const contaSalario = new ContaSalario(1001, cliente1);*/

const diretorGeral = new Diretor("Bruno", 36899602822, 10000);

const gerenteGeral = new Gerente("Ricardo", 12312312355, 5000);

diretorGeral.cadastrarSenha("123456789");

const estaLogado = SistemaAutenticacao.login(diretorGeral, "123456789");

const cliente = new Cliente("Lais", 12312312322, "123456");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123456");

console.log(estaLogado, clienteEstaLogado);

