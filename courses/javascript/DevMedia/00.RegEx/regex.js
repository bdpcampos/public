/*

As RegEx são baseadas em dois elementos: um padrão e modificadores. Esses elementos, em conjunto, formam a chamada expressão regular, cuja sintaxe básica é bastante simples:

/padrão/modificadores

A expressão /devmedia/i, por exemplo, pode ser utilizada para buscar o padrão “devmedia” sem levar em consideração se as letras são maiúsculas ou minúsculas no texto, por causa do modificador “i”.

Os modificadores são opcionais dentro das expressões regulares, e servem para adicionar algum comportamento que, por padrão, elas não possuem. A Tabela 1 mostra os três modificadores que podem ser utilizados.

i  -  Não leva em consideração maiúsculas e minúsculas (case-insensitive).

g  -  Global Match – procura todas as ocorrências da expressão no texto, ao invés de parar na primeira ocorrência.

m  -  Procura por ocorrências em múltiplas linhas.


Nós podemos querer buscar, por exemplo, somente números em um texto, ou números de 1 a 5, ou ainda somente as letras A, B e C. Tudo isso é possível através do uso de colchetes, como na expressão regular /[abc]/i, que busca pelos caracteres “a”, “b” ou “c” sem levar em consideração se são maiúsculos ou não. Outra opção seria /[^abc]/i, que busca qualquer caractere que não seja “a”, “b” ou “c”. 

Também é possível buscarmos uma sequência de caracteres, como nas expressões /[a-c]/i e /[^a-c]/i, que em resultado são equivalentes às anteriores, mas definem uma busca por caracteres na faixa de “a” a “c”. O mesmo é válido com números, ao invés de letras.

Outra possibilidade que as expressões regulares oferecem é a utilização de caracteres entre parênteses, que fazem com que seja encontrada qualquer uma das alternativas especificadas nessa expressão. Por exemplo, /(a|b|c)/i tem o mesmo comportamento da expressão /[abc]/i, utilizando o caractere “|” para representar a operação lógica OU, como é comum na programação.


As expressões regulares oferecem, ainda, a possibilidade de utilização de metacharacters e quantificadores. Os meta caracteres são muito variados e cada um define um padrão comum. Com eles é possível, por exemplo, definirmos uma expressão como /[\w]/ para encontrarmos uma palavra, e /[\W]/ para buscar por algo que não seja uma palavra (letras maiúsculas indicam a negação do equivalente em minúsculo).


. (ponto) - Qualquer caractere, exceto nova linha e terminador de linha.
\w e \W - Palavra e não-palavra.
\d e \D - Dígito e não-dígito.
\s e \S - Espaço em branco e não-espaço.
\b e \B - No começo/fim da palavra e não-começo/fim da palavra.
\0 - Caractere NUL.
\n - Caractere nova linha.
\f - Caractere form feed.
\r - Caractere de retorno.
\t - Caractere que representa “tab”.
\v - Caractere que representa “tab” vertical.
\xxx - Caractere especificado pelo número octal xxx.
\xdd - Caractere especificado pelo número hexadecimal dd.
\uxxxx - Caractere unicode especificado pelo número hexadecimal xxxx.


Os quantificadores, por sua vez, indicam o número de vezes que os padrões devem ser encontrados nas strings. O "+", por exemplo, procura por um texto que contenha pelo menos um caractere especificado. Assim, uma expressão regular como /[a+]/ retorna qualquer string que tenha uma ou mais letras "a".

Outros quantificadores que merecem destaque são: "?", que procura por 0 ou 1 ocorrência; "", que procura por uma sequência de "x" (numeral) caracteres iguais; "$", que procura pelos caracteres no fim da palavra; e "^", que procura no início. Há outros quantificadores que podem ser encontrados facilmente em uma busca na web, mas são bem menos utilizados do que esses destacados.

*/


/*
-----Exemplo 1-----

As buscas com o auxílio de expressões regulares no JavaScript podem ser realizadas de duas formas: a partir do método search(), do tipo string, ou do método exec(), do tipo RegExp. O valor de retorno de cada um dos métodos, no entanto, é diferente: enquanto search() retorna o índice da ocorrência encontrada, exec() retorna o primeiro caractere encontrado que satisfaça a expressão regular.

Vamos começar, então, pelo search(), que por ser um método do tipo string, será executado em cima da própria variável, ou seja, do texto no qual desejamos buscar determinada expressão. O código abaixo mostra em detalhes o uso desse método. Ali, note que estamos declarando uma string com um texto de teste, e realizando a operação "search()" sobre ele. No caso, estamos fazendo a busca por ao menos uma ocorrência da letra "j", como mostra a expressão regular especificada, com o quantificador "+". Assim, o valor retornado na variável n é 24, indicando o índice da letra "J" na string.

*/

let texto = 'Expressões regulares em JavaScript na DevMedia!'

console.log(texto.search(/[j+]/i))   //  24


/*

Algo similar poderia ser obtido com o método exec() de RegExp, como mostra o código abaixo. Nesse caso, estamos criando uma expressão regular (um objeto RegExp) e comparando-a e com a string criada. Repare que essa operação é justamente o contrário do que fizemos com o método search(), quando comparamos uma string com a expressão regular. O valor retornado em n, dessa vez, será a string encontrada através da expressão regular (no caso, a letra J), e não a posição em que ela se encontra no texto.

*/

let str = 'Expressões regulares em JavaScript na DevMedia'

let regexp = new RegExp(/[j+]/i).exec(str);

console.log(regexp)  // ['J', index: 24, input: 'Expressões regulares em JavaScript na DevMedia', groups: undefined]



/*
-----Exemplo 2-----

As strings, em JavaScript, possuem o método replace(), que pode ser utilizado com expressões regulares para substituição de determinadas ocorrências no texto por algum outro texto qualquer. A ideia básica é que a expressão regular seja empregada para encontrar as ocorrências e, a partir daí, o método se encarrega de substituir os dados de acordo com o que foi definido.

O exemplo abaixo mostra um exemplo de uso do método replace() para trocar todas as ocorrências do caractere "j" ou "J" por "I". Note que o código é bastante simples, e é possível, ainda, trocarmos caracteres por strings, alterando também o tamanho do texto. Outro ponto digno de nota é a utilização dos modificadores "i" e "g", para garantir que não se leve em consideração a diferença entre letras maiúsculas e minúsculas na expressão regular (devido ao "i"), e para fazer com que todas as ocorrências encontradas sejam substituídas, sem parar na primeira delas (modificador "g").

*/


let str2 = 'Expressões regulares em JavaScript na DevMedia JJJ!'

let n = str2.replace(/[j]/ig, 'I')

console.log(n)   //   Expressões regulares em IavaScript na DevMedia III!



/*
-----Exemplo 3-----

As expressões regulares no JavaScript também são empregadas com bastante frequência para outras duas operações: split() e test(). O primeiro é um método do próprio tipo string, e é utilizado para separar um texto em várias outras strings, em um array, a partir de um separador. Já o método test(), da RegExp, verifica a ocorrência de uma expressão regular em uma string, retornando "verdadeiro", caso encontrada, ou "falso", caso não o seja.

O método split() se baseia em um separador, o qual define em quais lugares a string será separada e, consequentemente, em quantas partes isso ocorrerá. Esse separador pode ser especificado através de uma expressão regular.

O exemplo abaixo mostra um caso de uso muito comum desse método, separando a string através de uma expressão regular que procura por espaços (\s), tabs (\t) e quebras de linha (\n). É importante observarmos que a variável n é um array de seis posições, contendo as substrings separadas pelos espaços em branco em str. Quando realizamos a operação console.log(n), todas essas substrings são mostradas, separadas por vírgula.

*/


const str3 = 'Expressões regulares em JavaScript na DevMedia!'

const n3 = str3.split(/[\t\s\n]/i)

console.log(n3)      //   [ 'Expressões', 'regulares', 'em', 'JavaScript', 'na', 'DevMedia!' ]
console.log(n3[3])   //   JavaScript


// Outra possibilidade é a verificação de ocorrências de uma expressão regular em um determinado texto, o que pode ser feito através do método test(). Note, no exemplo, que seu uso é também bastante simples: a variável n conterá o valor true, uma vez que a ocorrência será encontrada no começo da palavra "JavaScript". Caso tivéssemos uma expressão regular como /[f]/i, por exemplo, a mesma variável conteria false, uma vez que não há letra "f" na string de exemplo.

const regexpTest = new RegExp(/[j]/i).test(str3)

console.log(regexpTest)   //  True