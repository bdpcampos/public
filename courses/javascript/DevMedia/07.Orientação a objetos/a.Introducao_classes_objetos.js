/*

POO: Trabalhando com classes e objetos em JavaScript
Veja neste artigo uma breve introdução à programação orientada a objetos em JavaScript, aprendendo a criar classes e objetos na principal linguagem de script web client-side.

Este guia de estudos mostrará classes e objetos em JavaScript. Serão abordados os conceitos básicos de classes e objetos, além da formulação de alguns programas didáticos e exemplificatórios para que haja o aprendizado sobre o funcionamento das classes e dos objetos.
Existem três maneiras de definir classes em JavaScript.

 */


 /*

--------- A partir do uso de uma função ---------
É muito provável que a via mais comum para criar uma classe seja uma função, afinal pode-se definir uma função normal e, então, criar um objeto usando a palavra-chave new. Para definir propriedades para um objeto, veja o trecho de código abaixo. Usando uma função consegue-se definir classes através do mecanismo de definir e declarar internamente um método em adição ao protótipo.

Para criar o objeto pessoa usando a recém-definida classe Pessoa, simplesmente declare-as e use a palavra-chave new para inicializá-las.
  
  */

function Pessoa(_nome) {
    this.Nome = _nome;
}

pessoa = new Pessoa("Bruno")

console.log(pessoa.Nome)


/*

Objetos em JavaScript
JavaScript é uma linguagem de programação orientada a objetos e, assim sendo, suas variáveis são dependentes dos objetos. Nas linguagens de programação orientadas a objetos, os programadores criam seus próprios objetos e tipos de variáveis. Um objeto é um tipo especial de variável que contém propriedades e métodos. Já viu-se até agora muitos tipos de variáveis, tais como vetor, string, etc. Em adição a estes objetos criados, você pode criar os seus próprios.

Sabe-se que JavaScript é uma Linguagem de Programação Baseada em Objetos. Uma Linguagem de Programação Baseada em Objetos permite que se defina objetos à vontade do programador. Abaixo temos scripts que mostrarão como declarar uma classe e como usar um objeto como uma instância de uma classe.


*/

function Carro()
{
  var Marca = "Sem marca";
  var Modelo = "Sem modelo";
  this.SetMarca = SetMarca;
  this.SetModelo = SetModelo;
  this.ShowMarca = DisplayMarca;
  this.ShowModelo = DisplayModelo;

  function DisplayMarca(){
    console.log(Marca);
  }

  function DisplayModelo(){
    console.log(Modelo);
  }

  function SetMarca(_marca) {
    Marca = _marca;
  }

  function SetModelo(_modelo) {
      Modelo = _modelo;
  }

  }
  var carro = new Carro();
  carro.SetMarca("Ford");
  carro.SetModelo("Ka");
  carro.ShowMarca();
  carro.ShowModelo();



/*

A seguir vemos outro script que explica o método de declaração e os objetos.

Não há a presença de classes, no entanto pode-se chamar os construtores que inicializarão as informações dos objetos, e estes podem atuar ainda como containers para as variáveis de classes e métodos. O objeto é uma instância de uma classe e um objeto é uma manifestação em tempo de execução de um tipo particular de classe.

*/

  carro2 = {
    Marca : "Ford",
    Modelo : "Ka",
    Caracteristicas : ["Preto", 1.0, "2 portas"],

    exibirDetalhes : function(){
      console.log("Marca: " + this.Marca + " - Modelo: " + this.Modelo)
    }
}

carro2.exibirDetalhes();
console.log(carro2.Caracteristicas[0])

var Pessoa2 = { nome : "Maria", idade : 30, sexo: "F" }

var mapa = {
    cantoSuperiorEsquerdo : { x : 1, y : 1 },
    cantoSuperiorDireito : { x : 10, y : 1 },
    cantoInferiorEsquerdo : { x : 1, y : 10 },
    cantoInferiorDireito : { x : 10, y : 10 }
}

console.log(mapa.cantoInferiorDireito.x);