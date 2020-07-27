
function carregar () {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12) {
        //BOM DIA!
        msg.innerHTML += "</br>Bom dia!"
        img.src = "_images/manha.png"
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE!
        msg.innerHTML += "</br>Boa tarde!"
        img.src = "_images/tarde.png"
        document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE!
        msg.innerHTML += "</br>Boa noite!"
        img.src = "_images/noite.png"
        document.body.style.background = '#515154'
    }
}
