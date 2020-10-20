
const linha = document.querySelector('#tabela-pacientes');
const pacientes = document.querySelectorAll('.paciente');
const button = document.querySelector(".button");

function adicionarPaciente() {
    const arrayObjects = document.querySelectorAll('.input');

    const novaLinha = document.createElement('TR');
    const campoNome = document.createElement('TD');
    const campoPeso = document.createElement('TD');
    const campoAltura = document.createElement('TD');
    const campoGorduraCorporal = document.createElement('TD');
    const campoImc = document.createElement('TD');

    novaLinha.classList.add("paciente");
    campoNome.classList.add("info-nome");
    campoPeso.classList.add("info-peso");
    campoAltura.classList.add("info-altura");
    campoGorduraCorporal.classList.add("info-gordura");
    campoImc.classList.add("info-imc");

    campoNome.textContent = `${arrayObjects[0].value}`;
    campoPeso.textContent = `${arrayObjects[1].value}`;
    campoAltura.textContent = `${arrayObjects[2].value}`;
    campoGorduraCorporal.textContent = `${arrayObjects[3].value}`;

    novaLinha.appendChild(campoNome);
    novaLinha.appendChild(campoPeso);
    novaLinha.appendChild(campoAltura);
    novaLinha.appendChild(campoGorduraCorporal);
    novaLinha.appendChild(campoImc);

    linha.appendChild(novaLinha);

    calcularImc(novaLinha);

}

function calcularImc(item) {
    const valorPeso = Number(item.querySelector(".info-peso").textContent);
    const valorAltura = Number(item.querySelector(".info-altura").textContent);
    const imc = item.querySelector(".info-imc");

    if(valorPeso > 0 && valorPeso <1000 && valorAltura > 0 && valorAltura < 3){
        imc.textContent = Math.round(valorPeso / (valorAltura * valorAltura));
    } else {
        imc.textContent = "Valores inválidos!";
        item.classList.add("paciente-invalido");
    }
}

pacientes.forEach(calcularImc);

button.addEventListener("click", adicionarPaciente);



