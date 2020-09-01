let http = require('http') //baixa o modulo http do npm, que já vem instalado como padrão no Node.js

const { Console } = require('console')

http.createServer(function(request, response){
    response.write('Resposta do servidor via HTTP!! :D ')
    response.end()
}).listen(8081)

console.log("Servidor está rodando em http://localhost:8081")