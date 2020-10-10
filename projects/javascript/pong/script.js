//Functions

function drawBall(x,y) {

    brush.fillStyle = color;
    brush.beginPath();
    brush.arc(x,y,ballSize,0,2*Math.PI);
    brush.fill();
}


function drawRacket(x,y) {

    brush.fillStyle = color;
    brush.fillRect(x,y,racketWidth,racketHeight);
}


function drawScreen() {

    brush.clearRect(0, 0, screenWidth, screenHeight)  //Clears screen for a new draw event

    changeBallDirection(); //Chanhe ball direction if hits borders or rackets

    directBallMovement(ballDirection); // Make ball movement relative to direction angle

    moveYourRacket();

    drawBall(ballPosX,ballPosY); // Draws ball

    drawRacket(myRacketPosX,myRacketPosY); // Draws my racket

    drawRacket(yoursRacketPosX,yoursRacketPosY); //Draws opponent's racket

    displayScore()
}


function changeBallDirection() {          //Still need improvements :D :D :D

    if(ballPosX < (0 + (ballSize/2))) {     //If hits left border
        if(ballDirection === 135) {
            ballDirection = 45;
        } else if(ballDirection === 225) {
            ballDirection = 315;
        }
        yourScore += 1;
    }

    if(ballPosX > (screenWidth - (ballSize/2))) {   //If hits right border
        if(ballDirection === 45) {
            ballDirection = 135;
        } else if(ballDirection === 315) {
            ballDirection = 225;
        }
        myScore += 1;
    }

    if(ballPosY < (0 + (ballSize/2))) {    //If hits top border
        if(ballDirection === 135) {
            ballDirection = 225;
        } else if(ballDirection === 45) {
            ballDirection = 315;
        }
    }

    if(ballPosY > (screenHeight - (ballSize/2))) {   //If hits bottom border
        if(ballDirection === 225) {
            ballDirection = 135;
        } else if(ballDirection === 315) {
            ballDirection = 45;
        }
    }

    if(ballPosX <= (myRacketPosX + racketWidth + (ballSize/2)) && ballPosY >= myRacketPosY && ballPosY <= myRacketPosY +  racketHeight) {     //If hits my racket
        if(ballDirection === 135) {
            ballDirection = 45;
        } else if(ballDirection === 225) {
            ballDirection = 315;
        }
    }

    if(ballPosX >= (yoursRacketPosX - (ballSize/2)) && ballPosY >= yoursRacketPosY && ballPosY <= yoursRacketPosY +  racketHeight) {     //If hits opponents racket
        if(ballDirection === 45) {
            ballDirection = 135;
        } else if(ballDirection === 315) {
            ballDirection = 225;
        }
    }
}


function directBallMovement(degrees) {

    const radians = toRadians(degrees);

    ballPosX +=  (ballSize/2) * Math.cos(radians);
    ballPosY -=  (ballSize/2) * Math.sin(radians);
}


function toRadians (angle) {
  return angle * (Math.PI / 180);
}


function moveMyRacket(object){

    if(object.keyCode == '38'  && myRacketPosY > 0) { 
        myRacketPosY -= (ballSize*2); }  // Up

    if(object.keyCode == '40' && myRacketPosY < screenHeight - racketHeight) { 
        myRacketPosY += (ballSize*2);  }  // Down
}


function moveYourRacket(){

    yoursRacketPosY = ballPosY - racketHeight/2;
        //need to fix out of bounds racket and opponents always wins

}


function initiatePositionElements() {

    ballPosX = (screenWidth / 2);  //Initial position of screen elements
    ballPosY = (screenHeight / 2);

    myRacketPosX = racketWidth * 3;
    myRacketPosY = screenHeight / 2 - racketHeight / 2;

    yoursRacketPosX = screenWidth - racketWidth * 3 - 10;
    yoursRacketPosY = screenHeight / 2 - racketHeight / 2;

    ballDirection = 45; //degrees
}


function displayScore() {

    scoreScreen.innerHTML = `<p>${myScore} &nbsp &nbsp ${yourScore}</p>`
}


//Variables declaration

const screen = document.querySelector('canvas');
const scoreScreen = document.querySelector('#score')

const screenWidth = screen.getBoundingClientRect().width
const screenHeight = screen.getBoundingClientRect().height
let brush = screen.getContext('2d');

let myScore = 0;
let yourScore = 0;

const color ='white';
const ballSize = 10;
const racketWidth = 10;
const racketHeight = 100;

let ballPosX;
let ballPosY;
let ballDirection;
let myRacketPosX;
let myRacketPosY;
let yoursRacketPosX;
let yoursRacketPosY;


//Event Listeners setters


document.addEventListener('keydown', moveMyRacket);


//Code

initiatePositionElements();

screenInterval = setInterval(drawScreen, 15);



