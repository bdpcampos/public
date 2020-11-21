

const botaoAdcionar = document.querySelector('.button-buscar');

botaoAdcionar.addEventListener('click', function() {

    const xhr = new XMLHttpRequest(); //Novo objeto de requisição HTTP

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");   //Abre a conexão com a api, do tipo GET

    xhr.addEventListener("load", function(){

        if(xhr.status === 200){
            const resposta = xhr.responseText;
            const pacientesRecebidos = JSON.parse(resposta);
    
            pacientesRecebidos.forEach(adicionarPacienteNaTabela);
        } else{
            alert("Erro "+xhr.status+". Tente novamente mais tarde!")
        }



    }); //Adiciona um "escutador" para, quando a resposta voltar, fazer a função

    xhr.send(); //Envia a requisição criada anteriormente



}, false);