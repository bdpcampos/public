let http = require('http') //baixa o modulo http do npm, que já vem instalado como padrão no Node.js

let fs = require('fs') //Pacote de File System --> permite abrir, ler e escrever arquivos

const { Console } = require('console')

http.createServer(function(request, response){
    
    fs.readFile('index.html', function(erro, conteudo){
        if(erro){
            response.write('404 - File not found :D :D --> Dinosaursssssss')
        }else {
            response.write(conteudo)
        }
        response.end()
    })

}).listen(8081)



console.log("Servidor está rodando em http://localhost:8081")