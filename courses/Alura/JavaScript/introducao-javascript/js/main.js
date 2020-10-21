const linha = document.querySelector('#tabela-pacientes');
const pacientes = document.querySelectorAll('.paciente');
const button = document.querySelector(".button");


pacientes.forEach(preCalcularImc);

button.addEventListener("click", adicionarPaciente, false);



