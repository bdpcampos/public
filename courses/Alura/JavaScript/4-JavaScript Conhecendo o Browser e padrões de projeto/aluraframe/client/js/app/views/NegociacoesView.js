/*  Import declaration  */

import { DateHelper } from "../helpers/DateHelper.js"


/*  Class declaration  */

export class NegociacoesView {

    constructor(elementoDoDOM) {
        this._elemento = elementoDoDOM;
    }


    _template(modelo) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
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
                    ${modelo.negociacoes.reduce((total,item) => total + item.volume, 0.0)}
                </td>
            </tfoot>
        </table>
        `;
    }

    update(modelo) {
        this._elemento.innerHTML = this._template(modelo);
    }

}

