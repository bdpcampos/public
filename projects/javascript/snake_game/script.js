
function drawGreenSquare(x,y) {

    brush.fillStyle = 'green';
    brush.fillRect(x,y,squareSize,squareSize);
    brush.fillStroke = 'black';
    brush.strokeRect(x,y,squareSize,squareSize);
}

function drawScreen() {
    brush.clearRect(0, 0, 600, 600)

    arrayX.push(posX);
    arrayY.push(posY);

    for (let i = 0; i < snakeSize; i++){
        Green(arrayX[i], arrayY[i]);
    }

    if(arrayX.length > snakeSize){
        arrayX.shift();
        arrayY.shift();
    }

    switch (moveDirection) {
        case 'up':
            posY -= squareSize;
            break;
        
        case 'down':
            posY += squareSize;
            break;

        case 'left':
            posX -= squareSize;
            break;
            
        case 'right':
            posX += squareSize;
            break;
    }
}

function moveDirectionInput(object) {
    if(object.keyCode == '38') { moveDirection = 'up'; }
    if(object.keyCode == '40') { moveDirection = 'down'; }
    if(object.keyCode == '37') { moveDirection = 'left'; }
    if(object.keyCode == "39") { moveDirection = 'right'; }
}

function increaseSnake() {
    snakeSize++;
}

function startGame() {
    screenInterval = setInterval(drawScreen, 200);
}

function stopGame() {
    clearInterval(screenInterval);
}


const screen = document.querySelector('canvas');
let brush = screen.getContext('2d');
const squareSize = 25;
let snakeSize = 1;
let screenInterval;

let moveDirection = 'right';
let posX = 275;
let posY = 275;

let arrayX = [];
let arrayY = [];

document.addEventListener('keydown', moveDirectionInput);
document.querySelector('#start').addEventListener('click', startGame)
document.querySelector('#stop').addEventListener('click', stopGame)










