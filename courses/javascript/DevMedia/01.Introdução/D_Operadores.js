/*

----------Operadores Aritméticos----------


---Eles são adição (+), subtração (-), multiplicação (*), divisão (/) e módulo (%)

---Podemos usar qualquer operador aritmético em conjunto com o operador de igualdade nas formas +=, -=, *=, /= ou %=

---Em qual ordem o JavaScript executa as operações aritméticas?

Assim como nas operações matemáticas, os primeiros cálculos feitos são os que possuem os operadores *, / e % e só então + e -.

Caso seja necessário mudar essa ordem, colocamos o que queremos priorizar dentro de parênteses e ele será efetuado primeiro.

---O que é NaN?

NaN significa “não é um número”, ele é o resultado de uma operação matemática que falhou ou por causa de uma operação com tipos incompatíveis 
(string * string, string / boolean, array * boolean ) ou pela divisão 0 / 0.


----------Incremento e decremento----------


Os operadores de incremento ++ e decremento --, são usados para adicionar ou subtrair o valor 1 de uma variável.

Esses operadores podem ser colocados antes ou após o nome de uma variável.


Quando colocado o operador antes do nome, o valor muda imediatamente -->

    var numero = 9;
    console.log(++numero);  

Neste caso, primeiro o valor será alterado de 9 para 10 e depois ele será impresso.


Quando o operador é colocado após o nome, o valor muda após a operação atual ser executada.

    var numero = 9;
    console.log(numero++);

Neste caso, primeiro o valor 9 será impresso e depois ele será modificado para 10.


----------Operadores relacionais----------


Os operadores de comparação servem para comparar dois valores, retornando um booleano (true ou false).

Os operadores de comparação são: ==, !=, <, >, <=, >=, === e !==.

---( ==, != )

Esses operadores conseguem fazer a comparação, mesmo que os valores sejam de tipos diferentes.

---( ===, !== ) --> Operadores de igualdade e desigualdade estrita

O operador de igualdade estrita (===) assim como o operador de igualdade (==), vai comparar se dois valores são iguais. 
A diferença entre os dois é que o operador === não faz conversão de tipo, ou seja, ele vai comparar se os dois valores são iguais tanto em valor quanto em tipo.


------

null == undefined // o resultado será true
null != undefined // o resultado será false

true == 1 // o resultado será true
true != 1 // o resultado será false
false == 0 // o resultado será true
false != 0 // o resultado será false


----------Operadores lógicos----------


Os operadores lógicos comparam dois valores booleanos e retorna um valor true ou false. São eles:

    &&  ||   !

    true && false // false
    false || false // false
    !true // false

    1 == '1' || "a" == "a" // true
    35 === '35' && 1 == 10 // false
    !( 'a' == 1) // true


---A ordem que o JavaScript vai interpretar uma operação lógica será da esquerda para direita.

---Caso haja uma operação relacional, ela será resolvida e o seu valor será usado pelo operador lógico.



*/