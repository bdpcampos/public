function verificar() {
    var pais = 'brasil'
    var txt = document.getElementById('pais')
    var res = document.querySelector('div#res')

    if (pais === txt.value.toLowerCase()){
        res.innerHTML = '<p>Você é brasileiro!</p>'
    } else {
        res.innerHTML = '<p>Você é estrangeiro!</p>'
    }
    
}