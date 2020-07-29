
function verificar(){
    //Resolve a idade
    let ano = parseInt(document.getElementById('tanoNascimento').value)

    let data = new Date().getFullYear()

    let idade = data - ano

    //Resolve o sexo
    let sexo = null

    if (document.getElementById('tsexoM').checked) {
        sexo = 'Homem'
    }
    if (document.getElementById('tsexoF').checked) {
        sexo = 'Mulher'
    } 

    //
    let imagem = document.getElementById('imagem')

    //Modificação da div no HTML
    imagem.innerHTML = `<p>Detectamos ${sexo} com ${idade} anos.</p>`

    if (idade < 0 || Object.is(NaN, ano)) {
        imagem.innerHTML = '<p>[ERRO] Selecione um ano válido!</p>'
    } else if (sexo === null){
        imagem.innerHTML = '<p>[ERRO] Selecione um sexo!</p>'
    } else if (sexo === 'Homem') {
        if (idade < 8) {
        imagem.innerHTML += `<img src="_images/foto-bebe-m.png" alt="">`
        } else if (idade < 18) {
        imagem.innerHTML += `<img src="_images/foto-jovem-m.png" alt="">`
        } else if (idade < 65) {
        imagem.innerHTML += `<img src="_images/foto-adulto-m.png" alt="">`  
        } else {
        imagem.innerHTML += `<img src="_images/foto-idoso-m.png" alt="">`
        }
    } else if (sexo === 'Mulher') {
        if (idade < 8) {
        imagem.innerHTML += `<img src="_images/foto-bebe-f.png" alt="">`
        } else if (idade < 18) {
        imagem.innerHTML += `<img src="_images/foto-jovem-f.png" alt="">`
        } else if (idade < 65) {
        imagem.innerHTML += `<img src="_images/foto-adulto-f.png" alt="">`  
        } else {
        imagem.innerHTML += `<img src="_images/foto-idoso-f.png" alt="">`
    } 
    }
  
}