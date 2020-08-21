var vencedores = [
    {
        nome : "Equipe Super",
        pais : "Brasil"
    },
    {
        nome : "Time Maximo",
        pais : "EUA"
    },
    {
        nome : "Mega Grupo",
        pais : "Canadá"
    }
 ]


 function pt1(){

    let podioPorPais = vencedores.map(function(item, indice){
        return `<tr>
                    <td>${indice + 1}</td>
                    <td>${item.nome}</td>
                    <td>${item.pais}</td>
                </tr>`
    })

    document.querySelector("#tbPodio tbody").innerHTML = podioPorPais.join("")

 }