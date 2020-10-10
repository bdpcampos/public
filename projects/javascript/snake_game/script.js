//Functions

function drawSquare(x,y,color) {   //Draws snake building block

    brush.fillStyle = color;
    brush.fillRect(x,y,squareSize,squareSize);
    brush.fillStroke = 'black';
    brush.strokeRect(x,y,squareSize,squareSize);
}


function drawScreen() {   //Main function --> Redraws the screen in each refresh

    if(hittedProhibitedSpace()) {  //If hitted prohibited space --> Borders or itself --> Game failure events
        stopGame();
        alert("*** BUSTED ***")
        return;
    }

    if(hittedApple()){         //If hitted apple --> Scores points and stores them
        generateAppleCoordinates();
        increaseSnake();
        saveHighScore();
    }

    brush.clearRect(0, 0, canvasSize, canvasSize)  //Clears screen for a new draw event

    arrayX.push(posX); //Push new coordinates to snake array
    arrayY.push(posY);

    drawSquare(posXApple, posYApple, 'red');//Draw apple in current position

    for (let i = 0; i < snakeSize; i++){
        drawSquare(arrayX[i], arrayY[i], 'green'); //Draw snake in current position
    }


    if(arrayX.length > snakeSize){   // Eliminates snake tail to maintain snake size at refresh

        arrayX.shift();
        arrayY.shift();
    }

    switch (moveDirection) { // Changes the move direction of the snake for the next refresh

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


function moveDirectionInput(object) {                          // Maps keyboard arrow to set snake direction

    if(object.keyCode == '38') { moveDirection = 'up'; }
    if(object.keyCode == '40') { moveDirection = 'down'; }
    if(object.keyCode == '37') { moveDirection = 'left'; }
    if(object.keyCode == "39") { moveDirection = 'right'; }
}


function increaseSnake() {  //Function triggered when snake hits and apple --> Snake grows by one and player scores a point

    snakeSize++;
    showScore();
}


function generateAppleCoordinates() {  //Generates random cordinates for apple --> WIP apple still appears inside snake :D

   posXApple = Math.floor(Math.random() * (((canvasSize - squareSize) / squareSize) + 1)) * squareSize; //Returns only coordinates that matches snake positions
   posYApple = Math.floor(Math.random() * (((canvasSize - squareSize) / squareSize) + 1)) * squareSize;    
}


function hittedProhibitedSpace() {  //Function that defines prohibited spaces --> Failure indicator

    let booleanVariable = false;


    //Need to implement hit itself failure code | WIP


    if((posX < 0 - screen.offsetLeft) || posX > canvasSize || (posY < 0 - screen.offsetTop) || posY > canvasSize ) {  // Failure when snake hit borders

        booleanVariable = true;
    }

    return booleanVariable;
}


function hittedApple() {  //Function that defines when snake hits an apple

    let booleanVariable = false;

    if(posX === posXApple && posY === posYApple) {
        
        return booleanVariable = true;
    }
}


function showScore() { //Defines actual player score

    scoreValue = snakeSize - snakeInicialSize;
    score.innerHTML = `<p>Score: ${scoreValue}</p>`
}


function saveHighScore(){              //Saves high score to local storage on client machine

    if(scoreValue > highScoreValue){

        localStorage.highScoreValue = JSON.stringify(scoreValue);
        highScoreValue = scoreValue;
        highScore.innerHTML = `<p>High Score: ${highScoreValue}</p>`;
    }
    
}


function startGame() {

    screenInterval = setInterval(drawScreen, 150); //Game pace interval in milliseconds
}

function stopGame() {

    clearInterval(screenInterval);
}

function newGame() {   //Sets initial values for the game

    snakeSize = snakeInicialSize;
    moveDirection = 'right';
    posX = canvasSize / 2;  //Initial position
    posY = canvasSize / 2;
    arrayX = [];
    arrayY = [];
    startGame();
    generateAppleCoordinates();
    showScore()
}


//Variables declaration

const screen = document.querySelector('canvas');
const score = document.querySelector("#score");
const highScore = document.querySelector("#high-score");

let brush = screen.getContext('2d');
const squareSize = 25;
const canvasSize = screen.getBoundingClientRect().width; //width === height

let snakeSize;
let screenInterval;
const snakeInicialSize = 3;
let scoreValue;
let highScoreValue;

let moveDirection = 'right';
let posX = canvasSize / 2;  //Initial position
let posY = canvasSize / 2;

let arrayX = [];
let arrayY = [];

let posXApple;
let posYApple;


//Event Listeners Setters

document.addEventListener('keydown', moveDirectionInput);
document.querySelector('#stop').addEventListener('click', stopGame)
document.querySelector('#new').addEventListener('click', newGame)


//Code

if(localStorage.highScoreValue){            //Retrieves high score from local storage on client machine

    highScoreValue = JSON.parse(localStorage.highScoreValue);
} else{
    
    highScoreValue = 0;
}

highScore.innerHTML = `<p>High Score: ${highScoreValue}</p>` //Shows high score on screen