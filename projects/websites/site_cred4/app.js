
const express = require('express')

const app = express()

const path = require('path')

const bodyParser = require('body-parser')




app.use(express.static(path.join(__dirname,"public")))

app.get('/', function(require, respond){
    respond.sendFile(path.join(__dirname,"public/index.html"))
})


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.post('/form1', function(require,respond){
    let formulario1 = {
        nome : require.body.nF1Name,
        razaoSocial : require.body.nF1RazaoSocial,
        email : require.body.nF1Mail,
        cnpj : require.body.nF1CNPJ,
        telefone : require.body.nF1Fone,
        valorEmprestimo: require.body.nF1Value,
        cidade : require.body.nF1City
    }
    
    respond.send(formulario1)
})


app.listen(8080)
