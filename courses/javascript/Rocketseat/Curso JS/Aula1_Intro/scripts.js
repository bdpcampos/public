const body = document.querySelector("body");

function exibeTexto(texto) {
    body.innerHTML += texto;
}

// Ex 1

const endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
   };

exibeTexto(`<p>O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua ${endereco.rua} com o nº ${endereco.numero}</p>`);


// Ex 2

function pares(x,y) {
    arrayTexto = [];

    function montarArray(n1, n2) {
        for (let i = n1; i <= n2; i+=2) {
            arrayTexto += `${i}, `;
        }
    }

    if (x < y && x % 2 === 0) {

        montarArray(x, y)
            
    } else if (x < y) {

        montarArray(x + 1, y)
    
    } else {

        arrayTexto = "X maior que Y, não conseguimos montar o intervalo!";
    }

    
    exibeTexto(`<p>${arrayTexto}</p>`)
}
 

pares(29, 321);




// Ex 3

function temHabilidade(skills) {

    const posicaoHabilidade = skills.indexOf("Javascript");

    if (posicaoHabilidade >= 0) {

        exibeTexto('<p>true</p>');

    } else {

        exibeTexto('<p>false</p>');
    }
    
}


const skills = ["Javascript", "ReactJS", "React Native"];

temHabilidade(skills); 



// Ex 4


function experiencia(anos) {
    if (anos <= 1) {
        exibeTexto('<p>Iniciante</p>');
    } else if (anos <= 3) {
        exibeTexto('<p>Intermediário</p>');
    } else if (anos <= 6) {
        exibeTexto('<p>Avançado</p>');
    } else {
        exibeTexto('<p>Jedi Master</p>');
    }
   }

const anosEstudo = 7;

experiencia(anosEstudo);


// Ex 5

const usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
   ];

   for (let usuario of usuarios){
        exibeTexto(`<p>O ${usuario.nome} possui as habilidades: ${usuario.habilidades.join(', ')}</p>`)
   }


  
