
function desenhaQuadradoVerde(x,y) {

    pincel.fillStyle = 'green';
    pincel.fillRect(x,y,tamanhoQuadrado,tamanhoQuadrado);
    pincel.fillStroke = 'black';
    pincel.strokeRect(x,y,tamanhoQuadrado,tamanhoQuadrado);
}

function redesenhaTela() {
    pincel.clearRect(0, 0, 600, 600)

    arrayX.push(posX);
    arrayY.push(posY);

    for (let i = 0; i < tamanhoCobra; i++){
        desenhaQuadradoVerde(arrayX[i], arrayY[i]);
    }

    if(arrayX.length > tamanhoCobra){
        arrayX.shift();
        arrayY.shift();
    }

    switch (direcao) {
        case 'cima':
            posY -= tamanhoQuadrado;
            break;
        
        case 'baixo':
            posY += tamanhoQuadrado;
            break;

        case 'esquerda':
            posX -= tamanhoQuadrado;
            break;
            
        case 'direita':
            posX += tamanhoQuadrado;
            break;
    }
}

function moveQuadrado(objeto) {
    if(objeto.keyCode == '38') { direcao = 'cima'; }
    if(objeto.keyCode == '40') { direcao = 'baixo'; }
    if(objeto.keyCode == '37') { direcao = 'esquerda'; }
    if(objeto.keyCode == "39") { direcao = 'direita'; }
}

function aumentaCobra() {
    tamanhoCobra++;
}


const tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');
const tamanhoQuadrado = 25;
let tamanhoCobra = 10;

let direcao = 'direita';
let posX = 275;
let posY = 275;

let arrayX = [];
let arrayY = [];

document.addEventListener('keydown', moveQuadrado);

//setInterval(redesenhaTela, 200);







