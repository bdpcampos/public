
function mostarAlerta() {
    alert('Botão foi clicado')
}

const botaoObjeto = document.querySelector('#div1')  // Pegando elemento ancestral no botao

botaoObjeto.addEventListener("click", mostarAlerta, false)  //funciona mesmo que o elemento é pai  do elemento clicado, false pega de baixo para cima, na ordem, chama bubbling. True pega de cima pra baixo, na ordem, capture.


/////////////////////////////////////

//Criando elementos com JS

const linkElement = document.createElement('a');

const textElement = document.createTextNode('Acessar o google');

const containerElement = document.querySelector('#app')

linkElement.setAttribute('href', 'https://www.google.com');

linkElement.setAttribute('title', 'Site do Google');

linkElement.appendChild(textElement);

containerElement.appendChild(linkElement);


/////

//Removendo elementos com JS

const inputElement = document.querySelector('#input')

containerElement.removeChild(inputElement);


//////

//Alterando estilos com JS

let boxClass = document.querySelectorAll('.box');

for (let i = 0; i < boxClass.length; i++) {

    boxClass[i].style.width = '300px';

    boxClass[i].style.minHeight = '100px';
    
    boxClass[i].style.backgroundColor = '#cccccc';

    boxClass[i].style.margin = '10px';
}



///////// Ex 1

const botaoCriaElemento = document.createElement('button');

const body = document.querySelector('body');

const textoBotao = document.createTextNode('Clique para criar elemento');

let elementos;


botaoCriaElemento.appendChild(textoBotao);

body.appendChild(botaoCriaElemento);


botaoCriaElemento.addEventListener('click', adcionaElemento, false);


function adcionaElemento() {
    const novoElemento = document.createElement('div');

    body.appendChild(novoElemento);

    novoElemento.style.width = '100px';

    novoElemento.style.height = '100px';

    novoElemento.style.backgroundColor = 'red';

    novoElemento.style.margin = '10px';

    novoElemento.addEventListener('mouseover', trocaCor, false);

}



///////// Ex 2

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
   }


function trocaCor() {

    let newColor = getRandomColor();

    event.target.style.backgroundColor = newColor;
}

   

///////// Ex 3

let nomes = ["Diego", "Gabriel", "Lucas"];

const div = document.querySelector('#lista');


montarLista();


function montarLista() {

    const ulExiste = document.querySelector("#lista ul");

    if(ulExiste != null){
        div.removeChild(ulExiste);
    }

    div.appendChild(document.createElement('ul'));

    const ul = document.querySelector('#lista ul');

    for (let i = 0; i < nomes.length; i++) {
        const linha = document.createElement('li')
    
        const textoLinha = document.createTextNode(nomes[i])
    
        ul.appendChild(linha)
    
        linha.appendChild(textoLinha)
    
        linha.style.listStyle = 'none'
    }
}




///////// Ex 4

div.addEventListener('click', adcionar, false);

function adcionar() {
    const inputNome = document.querySelector('#lista input');

    const nomeDigitado = inputNome.value;

    nomes.push(nomeDigitado);

    inputNome.value = null

    montarLista();
}
