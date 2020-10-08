
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
        drawGreenSquare(arrayX[i], arrayY[i]);
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
    console.log(posX, posY);
    if(hittedProhibitedSpace()) {
        stopGame();
        alert("You Lost !!!")
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

function hittedProhibitedSpace() {
    let booleanVariable = false;
    const posXOnArrayX = arrayX.indexOf(posX)
    const posYOnArrayY = arrayY.indexOf(posY)


    if(posXOnArrayX >= 0 && posYOnArrayY >= 0 && posXOnArrayX === posYOnArrayY) {
        booleanVariable = true;
    }

    if(posX < -25 - squareSize || posX > 600 + squareSize || posY < -25 - squareSize || posY > 600 + squareSize ) {
        booleanVariable = true;
    }

    return booleanVariable;
}



function startGame() {
    screenInterval = setInterval(drawScreen, 200);
}

function stopGame() {
    clearInterval(screenInterval);
}

function newGame() {
    snakeSize = 10;
    moveDirection = 'right';
    posX = 275;
    posY = 275;
    arrayX = [];
    arrayY = [];
    startGame();
}


const screen = document.querySelector('canvas');
let brush = screen.getContext('2d');
const squareSize = 25;
let snakeSize;
let screenInterval;

let moveDirection = 'right';
let posX = 275;
let posY = 275;

let arrayX = [];
let arrayY = [];

document.addEventListener('keydown', moveDirectionInput);
document.querySelector('#stop').addEventListener('click', stopGame)
document.querySelector('#new').addEventListener('click', newGame)










