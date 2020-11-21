
function removerPaciente() {
    
    const objeto = this.parentNode;

    objeto.classList.add("fadeout");

    setTimeout(function(){
        objeto.remove();
    },300);
}


function criaBotaoRemoverInicial() {
    pacientes = document.querySelectorAll('.paciente');
    pacientes.forEach(function(paciente) {
        removeX = paciente.querySelector(".delete");
        removeX.addEventListener("click", removerPaciente, false);
        removeX.addEventListener("mouseover", mouseOverDelete, false);
        removeX.addEventListener("mouseout", mouseOutDelete, false);
    });
}

function mouseOverDelete(){
    this.parentNode.style.backgroundColor = "lightcoral";
}

function mouseOutDelete(){
    this.parentNode.style.backgroundColor = "white";
}

criaBotaoRemoverInicial()

