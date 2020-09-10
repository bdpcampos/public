/*

Em JavaScript um objeto pode ser criado de várias maneiras, até mesmo a partir de um construtor, uma função que inicia as suas propriedades e atribui a elas os seus valores iniciais.

Um construtor é uma função que possui uma propriedade chamada prototype, usada para permitir a herança baseada em protótipo, bem como o compartilhamento de propriedades. Nesse ponto o JavaScript se distingue das demais linguagens que suportam a orientação a objetos, nas quais vemos com frequência esse paradigma ser fortemente atrelado ao conceito de classe.

Vamos analisar as duas sintaxes de construção de classes em JavaScript a partir de uma mesma entidade chamada Pessoa, que recebe em seu construtor dois argumentos, nome e cpf e os define como atributos da classe. Esta classe possui também dois métodos, um retornando o nome da pessoa e o outro retorna o cpf.

*/

/*

Abaixo podemos ver a classe Pessoa escrita com a sintaxe de protótipo utilizando uma função:

*/

function PessoaOld (nome, cpf) {
    this.nome = nome
    this.cpf = cpf
}

PessoaOld.prototype.getNome = function() {
    return this.nome
}

PessoaOld.prototype.getCpf = function() {
    return this.cpf
}

const pessoaOldUm = new PessoaOld('Bruno')

console.log(pessoaOldUm.getNome())


/*

A seguir esta mesma classe reescrita utilizando a sintaxe classes introduzida no ECMAScript 6:

*/

class Pessoa {

    constructor(nome, cpf) {
        this.nome = nome
        this.cpf = cpf

        console.log('construtor iniciado')
    }

    cpfIsValid(value) {
        return /^\d\d\d\.\d\d\d\.\d\d\d\-\d\d$/.test(value)
    }

    get Nome() {
        return this.nome
    } 

    get Cpf() {
        return this.cpf
    }

    set Cpf(value) {
        if(this.cpfIsValid(value)) {
            this.cpf = value
        } else {
            console.log('numero de cpf inválido')
        }
    }

}


console.log('Antes de instanciar um objeto com a classe, o construtor ainda não foi iniciado')

const pessoaUm = new Pessoa('Taynah')

console.log(pessoaUm.Nome)
console.log(pessoaUm.Cpf)

pessoaUm.Cpf = "999.999.999-99"

console.log(pessoaUm.Cpf)

console.log(pessoaUm.cpfIsValid('999.999.999-99'))

console.log(pessoaUm.cpfIsValid('99.999.999-99'))



/*

Herança
As classes JavaScript suportam o recurso herança, característica comum na orientação a objetos onde uma classe pode herdar comportamentos e características de outra classe.

No exemplo abaixo temos a classe Juridico utilizando o recurso herança para herdar os comportamentos da classe Pessoa.

*/


class PessoaJuridica extends Pessoa {
    /*
     sobrescreve o método cpfIsValid da classe Pessoa
    */

    cpfIsValid() {
        console.log('Esté método não pode ser acessado a partir desta classe')
    }


    CnpjIsValid(value) {
        // gera um erro se estiver sendo passado um número de cpf
        if(super.cpfIsValid(value)) {
            console.log(('Número de CPF não é aceito'))
        }
    }
}

