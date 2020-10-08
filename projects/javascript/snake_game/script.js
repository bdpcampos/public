
function drawSquare(x,y,color) {

    brush.fillStyle = color;
    brush.fillRect(x,y,squareSize,squareSize);
    brush.fillStroke = 'black';
    brush.strokeRect(x,y,squareSize,squareSize);
}

function drawScreen() {

    if(hittedProhibitedSpace()) {
        stopGame();
        alert("You Lost !!!")
        return;
    }

    if(hittedApple()){
        generateAppleCoordinates();
        increaseSnake()
    }

    brush.clearRect(0, 0, 600, 600)

    arrayX.push(posX);
    arrayY.push(posY);

    drawSquare(posXApple, posYApple, 'red');//Draw apple in current position

    for (let i = 0; i < snakeSize; i++){
        drawSquare(arrayX[i], arrayY[i], 'green'); //Draw snake in current position
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

function generateAppleCoordinates() {
   posXApple = Math.floor(Math.random() * ((575 / squareSize) + 1)) * squareSize; //Returns only coordinates that matches snake positions
   posYApple = Math.floor(Math.random() * ((575 / squareSize) + 1)) * squareSize;    
}

function hittedProhibitedSpace() {
    let booleanVariable = false;


    //Need to implement hit itself failure code


    if(posX < -25 || posX > 600 || posY < -25 || posY > 600 ) {
        booleanVariable = true;
    }

    return booleanVariable;
}

function hittedApple() {
    let booleanVariable = false;

    if(posX === posXApple && posY === posYApple) {
        return booleanVariable = true;
    }
}



function startGame() {
    screenInterval = setInterval(drawScreen, 200);
}

function stopGame() {
    clearInterval(screenInterval);
}

function newGame() {
    snakeSize = 3;
    moveDirection = 'right';
    posX = 275;
    posY = 275;
    arrayX = [];
    arrayY = [];
    startGame();
    generateAppleCoordinates();
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

let posXApple;
let posYApple;

document.addEventListener('keydown', moveDirectionInput);
document.querySelector('#stop').addEventListener('click', stopGame)
document.querySelector('#new').addEventListener('click', newGame)








