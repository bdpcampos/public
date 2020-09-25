
//Global variables declaration

const listElement = document.querySelector('#card-container');
const inputElement = document.querySelector('#app textarea');
const buttonElement = document.querySelector('#app button');
let toDos = [];


//Functions declaration

function createToDoElement(element) {
    const card = document.createElement('div');
    const cardText = document.createElement('div');
    const linkElement = document.createElement('div');
    const linkText = document.createTextNode('Delete');

    toDos.push(element);

    saveToDosLocal();

    const elementPositionOnArray = toDos.indexOf(element);

    linkElement.setAttribute('onclick', `deleteToDoElement('${elementPositionOnArray}')`);
    linkElement.setAttribute('href','#');
    linkElement.setAttribute('class',`delete`);
    linkElement.appendChild(linkText);

    cardText.setAttribute('class',`card-text`);
    cardText.innerHTML = `<p>${element}</p>`;

    card.setAttribute('id',`card${elementPositionOnArray}`);
    card.setAttribute('class',`card`);
    card.appendChild(cardText);
    card.appendChild(linkElement);

    listElement.appendChild(card);
}


function deleteToDoElement(pos) {
    toDos.splice(pos, 1, null);//Array will not shrink with delete, instead a null value will replace deleted element. This prevent a bug, since html div elements id are named after the array position of element.
    saveToDosLocal();

    const element = document.querySelector(`#card${pos}`)
    element.parentElement.removeChild(element);
}


function saveToDosLocal() {
    localStorage.toDos = JSON.stringify(toDos);
}


function newToDo() {
    inputElement.value !== "" && !toDos.includes(inputElement.value)? createToDoElement(inputElement.value) : alert('Adicione uma tarefa válida!');

    inputElement.value = null;
}


function renderToDos() {

    if(localStorage.toDos){
        const initToDos = JSON.parse(localStorage.toDos);

        for(let element of initToDos) {
            element && createToDoElement(element); //If element from localStorage is null the function will not create it
        }
    }
    
}


//Code

renderToDos();

buttonElement.addEventListener('click', newToDo, false);

inputElement.addEventListener('keypress', function(key){if(key.keyCode === 13) {newToDo()}}, false); 

