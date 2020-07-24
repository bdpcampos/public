//window.document.write(document.charset)

//Selecionando por Marca

/*
Só funcionou colocando direto no html, não funcionou colocando em arquivo separado.

var p1 = window.document.getElementsByTagName('p')[0]
window.document.write(p1.innerText)

*/

var area = window.document.getElementById('area')
area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', sair)


function clicar() {
    area.innerText = 'Clicou!'
    area.style.background = 'red'
}


function entrar() {
    area.innerText = "Entrou!"
}


function sair() {
    area.innerText = 'Saiu!'
    area.style.background = 'green'
}