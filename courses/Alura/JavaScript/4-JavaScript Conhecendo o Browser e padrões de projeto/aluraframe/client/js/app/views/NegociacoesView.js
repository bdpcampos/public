/*  Import declaration  */

import { View } from "../views/View.js"
import { DateHelper } from "../helpers/DateHelper.js"


/*  Class declaration  */

export class NegociacoesView extends View {

    _template(modelo) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th id="thData">DATA</th>
                    <th id="thQuantidade">QUANTIDADE</th>
                    <th id="thValor">VALOR</th>
                    <th id="thVolume">VOLUME</th>
                </tr>
            </thead>
        
            <tbody>
                ${modelo.negociacoes.map(item => `
                    <tr>
                        <td>${DateHelper.dataParaTexto(item.data)}</td>
                        <td>${item.quantidade}</td>
                        <td>${item.valor}</td>
                        <td>${item.volume}</td>
                    </tr>                  
                    `).join('')//Retorna uma string do resultado desta expressão. A string é a concatenação de todos os <tr> criados.
                } 
            </tbody>
            
            <tfoot>
                <td colspan="3"></td>
                <td>
                    ${modelo.volumeTotal}
                </td>
            </tfoot>
        </table>
        `;
    }
}

