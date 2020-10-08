
/* ---------- Start - abrirItemPerguntasFrequentes--------- */

let itemAnteriorPerguntasFrequentes = undefined

function abrirItemPerguntasFrequentes(id) {
    let itemPerguntasFrequentes = document.getElementById(id)

    if (itemAnteriorPerguntasFrequentes != id && itemAnteriorPerguntasFrequentes != undefined) {
        document.getElementById(itemAnteriorPerguntasFrequentes).className = "class-faq-div"
        document.getElementById(itemAnteriorPerguntasFrequentes).style.backgroundColor = "rgba(0, 0, 0, 0)"
    }


    if (itemPerguntasFrequentes.className != "class-changed-faq-div") {
        itemPerguntasFrequentes.className = "class-changed-faq-div"
        itemPerguntasFrequentes.style.backgroundColor = "#C1CDCD"
        } else {
            itemPerguntasFrequentes.className = "class-faq-div"
            itemPerguntasFrequentes.style.backgroundColor = "rgba(0, 0, 0, 0)"
        }

        itemAnteriorPerguntasFrequentes = id
    }

/* ---------- Finish - abrirItemPerguntasFrequentes--------- */


/* ---------- Start - irParaFormularioSuperior --------- */

    function irParaFormularioSuperior(value) {
        let objetoPadraoPagina = document.getElementById("sec-01-div-display")
        let objetoFormulario = document.getElementById("sec-01-div02")
        let campoValorFormulario = document.getElementById("idF1Value")

        objetoPadraoPagina.className = "sec-01-divclass-hidden"
        objetoFormulario.className = "sec-01-divclass-div02-show"

        campoValorFormulario.value = value

        /*Tô errado? Tô....mas funciona:*/

        document.getElementById("sec-01-inner-div-display").className ="sec-01-divclass-hidden"
        document.getElementById("sec-01-inner-div-display-header").className ="sec-01-divclass-hidden"
        document.getElementById("sec-01-inner-div-display-nav").className ="sec-01-divclass-hidden"
    }

/* ---------- Finish - irParaFormularioSuperior --------- */



    /* ---------- Start - formulario_footer --------- */ /*


let formulario_footer = document.querySelector("#formulario_footer")

formulario_footer.addEventListener('submit', function(event){

    event.preventDefault()

    let dados = {}
    dados.nome = formulario_footer.nome.value
    dados.email = formulario_footer.email.value
    dados.telefone = formulario_footer.telefone.value
    dados.mensagem = formulario_footer.mensagem.value
    dados.receberMailing = formulario_footer.receberMailing.value

    let dadosTexto = JSON.stringify(dados)

    var xhr = new.XMLHttpRequest()
    xhr.open('POST', 'contato')
    xhr.setRequestHeader("Content-Type", "application/json")

    xhr.onload = function() {
        alert(xhr.responseText)
        formulario_footer.reset()
    }

    xhr.send(dadosTexto)
})

// Preciso aprender Node e Express para fazer a outra ponta desde codigo :D :D :D


      /* ---------- End- formulario_footer --------- */ 

















    