
//Objetos são como “pequenos programas” com tarefas bem definidas e que, quando utilizados em conjunto, nos permitem criar grandes aplicações.
/*
Por que aprender sobre objetos?
Usar variáveis e funções globais em grandes aplicações pode não ser uma boa ideia, porque podemos nos perder facilmente conforme o código é escrito, 
arruinando o futuro do projeto. Nesses casos temos a mão a orientação a objetos e por isso 
veremos aqui quais são os recursos que o JavaScript nos oferece para utilizá-la.


-------------Destaques-------------------


Alguns destaques:

Funções construtoras
Objetos literais
Como utilizar a palavra-chave this


--------------Informações------------------


Um objeto é uma estrutura de dados, que modela as características e/ou comportamentos de alguma coisa do mundo real.

As características de um objeto são armazenadas em variáveis.

Enquanto os seus comportamentos são programados com funções.

Em um objeto, variáveis são propriedades e funções são métodos

Por que escrever o código dessa maneira? Algumas vezes precisamos escrever códigos parecidos, mas em diferentes partes da aplicação.

Uma característica importante dos objetos é que eles podem ser reutilizados.


-------------Exemplo função construtora-------------------


function Carro (marca, modelo, combutivel, valor) {
 this.marca = marca;
 this.modelo = modelo;
 this.combutivel = combutivel;
 this.valor  = valor ;

 this.ligar = function () {
   return "Vrum";
 }

 this.buzinar = function (nomeDoModelo){
   return nomeDoModelo + " passando.";
 }
}


-------------Exemplo de implementação de objetos-------------------


var carro2 = new Carro("Ford", "Fiesta", "flex", 30000);
var carro3 = new Carro("Fiat", "Uno", "gasolina", 25000);


--------------Funções Construtoras------------------


Em JavaScript temos duas formas de criar objetos e aqui veremos a primeira delas, com funções construtoras. 
Essa forma é muito utilizada, uma vez que favorece a reutilização de código.

Uma forma de criar objetos em JavaScript é através de uma função construtora. Para isso seguimos duas etapas:

-Criar uma função construtora
-Criar um objeto

Através de uma função construtora utilizamos a mesma estrutura em mais de um objeto.


--------------A palavra-chave this------------------


---Os objetos se comunicam entre si.

Repetidamente, você precisará que um objeto acesse as propriedades e funções de outro para que uma funcionalidade do sistema seja desempenhada.

Nas funções construtoras, o que permite esse acesso é a palavra-chave this.

Ao criar uma função construtora, tudo que for precedido por this será público e poderá ser acessado através do objeto.


---Protegendo uma propriedade ou método

Em alguns casos pode ser útil não usar this.

Dentro de uma função construtora o que não for precedido por this será privado e não poderá ser acessado através do objeto.

    function Pessoa(nome, sobrenome, contaBancaria) {
        let this.nome = nome;
        let this.sobrenome = sobrenome;
        let contaBancaria = contaBancaria

        this.falar = function() {                                
        return (`Meu nome é ${this.nome} ${this.sobrenome}`)

        movimentarConta = function() {                                
        return contaBancaria += 10
        }
    }


---Quando proteger pode ser útil?

Digamos que em um sistema de livraria só é permitido exibir o nome do livro junto ao da editora. Como nunca permitir que apenas o nome do livro seja exibido?

Uma opção é criar as propriedades nome e editora como privadas, utilizando um método público para juntar e retornar esses dois dados.

    function Livro(titulo, editora) {
    // Protegendo as propriedades usando const
        const _titulo = titulo;
        const _editora = editora;

    // Criando um método que vai juntar as propriedade titulo e editora
        this.retornarNomeDoLivro = function() {
        return (_titulo + " da editora " + _editora);
        }
    }

    var livro1 = new Livro('JavaScript', 'Devmedia');

    console.log( livro1.retornarNomeDoLivro() );
    // vai imprimir "JavaScript da editora Devmedia"

Nesse caso a única forma de obter o nome do livro é através do método retornarNomeDoLivro.


--------------Criando um objeto literal------------------


---Uma maneira mais simples de se criar um objeto é de forma literal. 

Usando objetos --> var pessoa = {propriedade1, propriedade2, método1}

    var pessoa = {
        nome : “José”,
        sobrenome : “Assis”,
        falar : function() {
            return "Meu nome é " + this.nome + " " + this.sobrenome;
            }
        }

Assim, estaremos criando o objeto de forma mais direta, sem precisar de uma função construtora para isso. Bem mais rápido e simples né!


---Quando não usar um objeto literal?

Um objeto literal é usado para criar um objeto único, com isso não conseguimos reaproveitar o código, o que nos leva a velhos problemas que são:

Reescrever o mesmo código toda vez que for preciso criar um novo objeto com as mesmas propriedades e métodos.

Tem também aquele exercício de memória de não esquecer nenhuma propriedade ou método na hora de reescrever.


E se simplesmente atribuirmos um objeto literal a uma variável?

Quando for esse o caso, o que estamos fazendo é um clone do objeto, ou seja, ambas as variáveis farão referência ao mesmo objeto.

        var pessoa = {
            nome: "João",
            sobrenome: "Silva"
        }

        var gerente = pessoa;
        var funcionario = pessoa;

Ambas as variáveis gerente e funcionario, apontam para o mesmo objeto pessoa, portanto se alterarmos a variável gerente
estaremos alterando o objeto pessoa e automaticamente a variável funcionário terá o mesmo valor.

        gerente.nome = "Ana";
        // Todos vão imprimir o mesmo valor "Ana"
        console.log(pessoa.nome);
        console.log(gerente.nome);
        console.log(funcionario.nome);

Nesse caso o recomendado é utilizar funções construtoras.


---Quando usar um objeto literal?

Usamos objetos literais quando não for preciso reaproveitar o código, ou seja, criar mais de um objeto com a mesma estrutura.

Usar ou não objetos literais vai depender de como será o seu código. Se precisar reaproveitar a mesma estrutura utilize uma função construtora, se não utilize objetos literais.





*/
//
console.log(' ')
console.log("-----------Funções Construtoras-------------")
console.log(' ')
//

//Criando a função construtora


function Pessoa(nome, sobrenome) {
    this.nome = nome;                                         //Propriedades de Pessoa
    this.sobrenome = sobrenome;

    this.falar = function() {                                 //Método de Pessoa
        return (`Meu nome é ${this.nome} ${this.sobrenome}`)
    }
}


//Criando um objeto a partir de uma função construtora

//Para criar um objeto utilizamos a palavra chave new. 
//Quando usamos new criamos um novo objeto a partir da função construtora que definirmos.
//Daí, com o operadores de atribuição (=), fazemos com que uma variável aponte para esse objeto para que possamos utilizá-lo a partir dela. 
//A partir de uma única função construtora conseguimos criar quantos objetos forem necessários


const funcionario = new Pessoa ("Maria", "Peixoto")
const gerente = new Pessoa ("Marcos", "Silva")
const diretor = new Pessoa ("Rogério", "Santos")


//Utilizando um objeto

//Para acessar alguma propriedade de um objeto utilizamos a seguinte sintaxe:
// nome_do_objeto.nome_da_propriedade

//Para invocar um método a única diferença é que utilizamos parênteses ( ) no final do nome do método.
// nome_do_objeto.nome_do_método()

console.log(funcionario.nome)
console.log(diretor.sobrenome)
console.log(gerente.nome)
console.log(funcionario.falar())
console.log(gerente.falar())
console.log(diretor.falar())


//
console.log(' ')
console.log("-----------Criando um objeto literal-------------")
console.log(' ')
//


var pessoa = {
    nome : "José",
    sobrenome : "Assis",
    falar : function() {
      return "Meu nome é " + this.nome + " " + this.sobrenome;
    }
   }

console.log(pessoa.falar())
