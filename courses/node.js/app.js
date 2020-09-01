let conjunto = []

for(let i = 0; i < 10; i++){
    conjunto.push(i)
}

conjunto.forEach(item => console.log(item))


///////////////////////////////


let funcoes = require('./funcoes.js') // Importa o arquivo funcoes.js para este arquivo, sob o nome de funcoes

let resultado = funcoes.validar('bruno2','123')

console.log(resultado ? 'Logado com sucesso!' : 'Falha no login!')


