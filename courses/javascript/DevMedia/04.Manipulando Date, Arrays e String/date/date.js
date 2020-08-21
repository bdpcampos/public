/*

Caso o seu código dependa muito da criação e manipulação de data/hora considere utilizar a biblioteca moment, que é como grandes aplicações lidam com os problemas decorrentes desse cenário.


Usar sempre ---> https://momentjs.com/


*/




/* JavaScript Date

JavaScript permite trabalhar com data/hora nativamente através do objeto Date.

JavaScript Date na prática
 */

var hoje = Date.now();

var nascimento = new Date('1989-03-19 00:00:00');

var independencia = new Date('September 7, 1822 00:00:00');

var umDia = 1000*60*60*24;
var diasDesdeIndependencia = (hoje - independencia) / umDia;

var umAno = 1000*60*60*24*365;
var anosDesdeIndependencia = (hoje - independencia) / umAno

console.log(hoje, nascimento, independencia, diasDesdeIndependencia, anosDesdeIndependencia)


/* Como funciona o objeto Date

Date armazena a quantidade de milissegundos desde o início do Unix Epoch (1 de janeiro de 1970 00:00:00 UTC). Por essa razão é possível criar e apresentar data/hora em formato numérico em JavaScript usando um inteiro longo para representá-las. As diversas formas possíveis de se escrever uma data/hora são normatizadas pela RFC 2822 e ISO 8601. */

/* Existem muitas formas de se instanciar Date: */

new Date(); /* Quando nenhum parâmetro for fornecido para o construtor de Date, o resultado será um objeto representando a data/hora atual no fuso horário local. */

Date.now(); /* Nesse caso, o inteiro retornado pelo método now() corresponde ao timestamp em milissegundos. */

new Date(milissegundos); /* milissegundos é um valor inteiro que representa a soma dos milissegundos desde 1 de janeiro, 1970, 00:00:00 UTC. */

new Date(data); /* data é um texto representando uma data no formato específico, conhecido como Timestamp. Para saber as formas possíveis consulte o documento IETF-compliant RFC 2822 timestamps. O formato mais usado é YYYY-MM-DDTHH:mm:ss:sssZ. */

new Date(ano, mês , dia , hora, minutos, segundos , milissegundos); 
/* ano é um valor inteiro que representa um ano. Note que 0 corresponde a 1900 e 99 a 1999.
mês é um valor inteiro que representa o mês. 0 corresponde a janeiro e 11 a dezembro.
(opcional) dia é um valor inteiro que representa um dia. O valor padrão é 1.
(opcional) hora é um valor inteiro que representa uma hora do dia. O valor padrão é 0 (meia noite).
(opcional) minutos é um valor inteiro que representa o minuto. O valor padrão é 0.
(opcional) segundos é um valor inteiro que representa um segundo. O valor padrão é 0.
(opcional) milissegundos é um valor inteiro que representa um milissegundo. O valor padrão é 0.  */


/* Para obter a data atual primeiro criamos uma instância de Date e então invocamos os seus métodos. */

const data = new Date();
data.getDate(); /* 10 */
data.getFullYear(); /* 2019 */


/* Três métodos de Date podem não ser óbvios. O primeiro deles é getDay(), que não retorna o dia do mês, mas sim o dia da semana. */

data.getDay(); // 4 - o resultado foi 4, correspondendo a quinta-feira, porque a contagem inicia em 0.*/


/* O segundo método é getMonth(), que pode ser visto abaixo e retorna o mês atual, mas a contagem inicia em 0: */

data.getMonth(); // 9 - o mês é outubro. */


/* O terceiro método é getYear() que retorna a soma dos anos desde 1900 */

data.getYear(); // No caso acima o resultado foi 119, porque o ano é 2019 (2019 - 1900 é igual a 119). */



/* Detectar uma data inválida em JavaScript requer duas verificações: primeiro constatamos se o objeto é uma instância de Date e depois se o seu valor não é um número. */

const data = new Date(Thu)
data instanceof Date && !isNaN(data) // false

/*A data é inválida porque quando passamos um texto para o construtor da classe Date, se espera que ele esteja num formato específico, o que não é o caso. Na linha seguinte fazemos as duas verificações citadas anteriormente e, dado que a data é inválida, o resultado é false.*/



//Podemos usar as funções setter de Date para manipular a data criada quando a classe foi instanciada. No exemplo a seguir adicionamos três dias a uma data qualquer:

const data = new Date() 
data.setDate(data.getDate() + 3)
data.getDate()

data.getMonth()
// 13 - No caso acima o dia inicial era 10 e após a soma se tornou 13. Caso a data fosse 31/8, após somar um dia ela se tornaria 1/9.


// Comparar duas datas é muito simples, basta usar o operador de comparação estrita (===) e o método getTime(), que retorna o número de milissegundos desde 1900:

const data1 = new Date(2019, 0, 1)
const data2 = new Date(2019, 0, 1)
data1.getTime() === data2.getTime()
// true

/*O motivo de não usarmos expressões como data1 == data2 ou data1 === data2 é devido ao fato de a comparação de objetos levar em conta o endereço de memória onde eles estão armazenados e não os valores das suas propriedades.*/



/* Calcular a diferença entre duas datas pode ser feito de diferentes formas. Em dias, o código poderia ser esse: */

const data1 = new Date(2019, 0, 1)
const data2 = new Date(2019, 0, 2)
const umDia = 1000*60*60*24
(data2 - data1) / umDia
// 1 - As datas são 1 e 2 de janeiro e a diferença entre elas é 1


/* Para calcular em horas poderíamos fazer dessa forma: */

const data1 = new Date(2019, 0, 1)
const data2 = new Date(2019, 0, 2)
const umaHora = 1000*60*60
(data2 - data1) / umaHora
// 24 - Podemos subtrair duas datas, porque em operações matemáticas instâncias de Date serão convertidas em inteiros, dada a invocação do método valueOf(), que nesse caso é equivalente a getTime().



/* Caso a data/hora esteja escrita com uma máscara, algo muito comum na programação web, podemos obter a quantidade de milissegundos dessa representação para atribuir esse número ao construtor de Date, criando assim um objeto válido. */

var milissegundos = Date.parse(2019/01/13);
var data = new Date(milissegundos);

/* O método parse() converte a representação em texto de uma data/hora em milissegundos, retornando um inteiro com esse valor, o qual pode ser usado em um dos construtores de Date. Isso será necessário principalmente porque o formato de data/hora que estamos acostumados a usar no Brasil não é compatível com aquele recebido no construtor de Date. */





