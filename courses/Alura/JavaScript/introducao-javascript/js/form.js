function adicionarPaciente(event) {

    event.preventDefault();
    event.stopPropagation();

    const form = document.querySelector('#form-cadastro');

    const paciente = criaPaciente(form);

    const novaTr = criaTr(paciente)

    linha.appendChild(novaTr);

    valoresInvalidos(novaTr);

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


function pesoIsValid(peso) {
    return (peso > 0 && peso < 1000);
}


function alturaIsValid(altura) {
    return (altura > 0 && altura < 3);
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

    return novaLinha;
}


function criaTd(dado, classe) {
    const td = document.createElement('TD');
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}