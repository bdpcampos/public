function adicionarPaciente(event) {

    event.preventDefault();
    event.stopPropagation();

    const form = document.querySelector('#form-cadastro');

    const paciente = criaPaciente(form);

    adicionarPacienteNaTabela(paciente);

}

function adicionarPacienteNaTabela(paciente) {

    const form = document.querySelector('#form-cadastro');

    const novaTr = criaTr(paciente);

    if(validaPaciente(paciente)){
        tabelaPacientes.appendChild(novaTr);
        form.reset();
    }

    valoresInvalidos(novaTr);

    novaTr.querySelector('.delete').addEventListener("click", removerPaciente, false);
    novaTr.querySelector('.delete').addEventListener("mouseover", mouseOverDelete, false);
    novaTr.querySelector('.delete').addEventListener("mouseout", mouseOutDelete, false);
}

function calcularImc(peso, altura) {

    if(pesoIsValid(peso) && alturaIsValid(altura)){
        return Math.round(peso / (altura * altura));
    } else {
        return "Valores inválidos!";
    }
}


function preCalcularImc(item) {
    let imc = item.querySelector(".info-imc");
    const peso = Number(item.querySelector(".info-peso").textContent);
    const altura = Number(item.querySelector(".info-altura").textContent);

    imc.textContent = calcularImc(peso, altura);

    valoresInvalidos(item);
}


function valoresInvalidos(item){
    let imc = item.querySelector(".info-imc");

    if(imc.textContent === "Valores inválidos!") {
        item.classList.add('paciente-invalido');
    }
}


function criaPaciente(form) {

    const paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }

    return paciente;
}


function criaTr(object) {

    const novaLinha = document.createElement('TR');
    novaLinha.classList.add("paciente");

    novaLinha.appendChild(criaTd(object.nome, "info-nome"));
    novaLinha.appendChild(criaTd(object.peso, "info-peso"));
    novaLinha.appendChild(criaTd(object.altura, "info-altura"));
    novaLinha.appendChild(criaTd(object.gordura, "info-gordura"));
    novaLinha.appendChild(criaTd(object.imc, "info-imc"));
    novaLinha.appendChild(criaTd("X", "delete"));

    return novaLinha;
}

function criaTd(dado, classe) {
    const td = document.createElement('TD');
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaPaciente(paciente) {

    mensagensErro = [];

    erroContainer.innerHTML = "";

    let returnVar = true

    if(paciente.nome === "") {
        mensagensErro.push('Paciente sem nome!');
        returnVar = false;
    }
    if(paciente.peso === "") {
        mensagensErro.push('Paciente sem peso!');
        returnVar = false;
    }
    if(paciente.altura === "") {
        mensagensErro.push('Paciente sem altura!');
        returnVar = false;
    }
    if(paciente.gordura === "") {
        mensagensErro.push('Paciente sem gordura corporal!');
        returnVar = false;
    }
    if(!pesoIsValid(paciente.peso) && paciente.peso !== "") {
        mensagensErro.push('Paciente com peso Inválido!');
        returnVar = false;
    }
    if(!alturaIsValid(paciente.altura) && paciente.altura !== "") {
        mensagensErro.push('Paciente com altura Inválida!')
        returnVar = false;
    }

    mensagensErro.forEach(montaMensagemErro);

    return returnVar
}

function pesoIsValid(peso) {
    return ((peso > 0 && peso < 1000));
}

function alturaIsValid(altura) {
    return (altura > 0 && altura < 3);
}

function montaMensagemErro(item) {
    const li = document.createElement('li');
    li.textContent = item;
    erroContainer.appendChild(li);
}



const tabelaPacientes = document.querySelector('#tabela-pacientes');
let pacientes = document.querySelectorAll('.paciente');
const button = document.querySelector(".button");
const erroContainer = document.querySelector('#mensagem-erro');

let mensagensErro = [];