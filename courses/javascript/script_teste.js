function multiplicar(){

    var tn1 = document.getElementById('tnum1')
    var tn2 = document.getElementById('tnum2')
    var result = document.getElementById('resultado')

    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var mult = n1 * n2

    result.innerHTML = mult


}