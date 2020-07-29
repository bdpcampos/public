
function gerarTabuada() {
    let numero = document.getElementById("tNumero")
    let area = document.getElementById("txtarea")
    let num = Number(numero.value)
    
    if (num === 0) {
        alert("Por favor digite um número")
        return
    }

    area.innerHTML = ""

    for (let x = 0; x <= 10; x++) {
        area.innerHTML += `${num} X ${x} = ${num * x}<br>`
    }

}