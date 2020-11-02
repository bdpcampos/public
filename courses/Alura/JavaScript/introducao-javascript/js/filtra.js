
const textoFiltroDigitado = document.querySelector('#filtrar-tabela');

textoFiltroDigitado.addEventListener('input', function(){
    pacientes.forEach(paciente => {
        const nome = paciente.querySelector('.info-nome').textContent;
        const expression = new RegExp(this.value,"i");  //"i" = case insensitive

        if(!expression.test(nome) && this.value.length > 0){  //.test() is a RegExp function to test if the text of the var argument contains in the RegExp object.
            paciente.classList.add('invisible');
        } else {
            paciente.classList.remove('invisible');
        }
    })
}, false);

