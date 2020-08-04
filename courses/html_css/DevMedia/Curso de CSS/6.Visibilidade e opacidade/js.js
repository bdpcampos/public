function desaparecer() {
    let caixa = document.getElementById("aparecer")

    caixa.style.display = "none"
}

function aparecer() {
    let caixa = document.getElementById("aparecer")

    caixa.style.display = "block"
}

function visOn() {
    let caixa = document.getElementById("aparecer")

    caixa.style.visibility = "visible"
}

function visOff() {
    let caixa = document.getElementById("aparecer")

    caixa.style.visibility = "hidden"
}

function opacity() {
    let opac = document.getElementById("trange")
    let image = document.getElementById("imagem")
    let valor_opacidade = Number(opac.value)

    image.style.opacity = valor_opacidade/100

}