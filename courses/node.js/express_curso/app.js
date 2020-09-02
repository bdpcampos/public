let express = require('express');  // Importa a biblioteca do Express para o projeto
let app = express();              // Precisamos instanciar o Express para executar as funções de suas bibliotecas
let path = require('path');       //Este módulo fornece acesso ao file system do OS. Neste caso vamos usar o "__dirname" para saber qual o diretorio root atual

/*
app.get('/', function(request, response){  //Ao usar '/' como parametro estamos dizendo que é a home do aplicativo, a pagina principal, primeira.
    response.send('Hello World!')
})                                   
*/

app.use(express.static("public")); //Inicializo o Express dizendo que ele vai servir arquivos estáticos da pasta 'public'. Ele monta o caminho para os links nos htmls usando este root como base.


app.get('/', function(request,response){
    response.sendFile(__dirname + "/public/page/index.html");
});

app.get('/contato', function(request,response){
    response.sendFile(__dirname + "/public/page/contato.html");
});

app.get('/sobre', function(request,response){
    response.sendFile(__dirname + "/public/page/sobre.html");
});



app.listen(8080, function(){
    console.log('Executando o web server');
});

