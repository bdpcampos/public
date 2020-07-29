function somar() {
    var tn1 = document.getElementById('txtn1') // Pode buscar por ID ou...
    var tn2 = document.querySelector('input#txtn2') // Pode buscar por Selector...
    var res = document.getElementById('res')

    // Armazenamos até agora os objetos da caixa de texto nas variáveis, abaixo vamos armazenar os números em outras variáveis --> Temos que transformar de string para number

    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2

    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>.`


}