
//Global variables declaration

const listElement = document.querySelector('#app ul');
const inputElement = document.querySelector('#app input');
const buttonElement = document.querySelector('#app button');
let toDos = [];


//Functions declaration

function createToDoElement(element) {
    const line = document.createElement('li');
    const lineText = document.createTextNode(element);
    const linkElement = document.createElement('a');
    const linkText = document.createTextNode('Excluir');

    toDos.push(element);

    saveToDosLocal();

    const elementPositionOnArray = toDos.indexOf(element);

    linkElement.setAttribute('onclick', `deleteToDoElement('${elementPositionOnArray}')`)
    linkElement.setAttribute('href','#')
    linkElement.appendChild(linkText);

    line.setAttribute('id',`pos${elementPositionOnArray}`)
    line.appendChild(lineText);
    line.appendChild(linkElement);

    listElement.appendChild(line);
}


function deleteToDoElement(pos) {
    toDos.splice(pos, 1);
    saveToDosLocal();

    const element = document.querySelector(`#pos${pos}`)
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
 
    const initToDos = JSON.parse(localStorage.toDos) || [];

    for(let element of initToDos) {
        createToDoElement(element);
    }
    
}


//Code

renderToDos();

buttonElement.addEventListener('click', newToDo, false);

inputElement.addEventListener('keypress', function(key){if(key.keyCode === 13) {newToDo()}}, false); 

