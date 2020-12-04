/*  Import declaration  */


/*  Class declaration  */

export class AlertaView {

    constructor(elementoDoDOM) {
        this._elemento = elementoDoDOM;
    }


    _template(modelo, classe) {
        return `<p class="${classe}">${modelo.texto}</p>`;
    }


    update(modelo, classe) {
        this._elemento.innerHTML += this._template(modelo, classe);
        this._clearAlert();
    }

    _clearAlert() {
        setTimeout(this._clearParameters.bind(this), 3000);
    }

    _clearParameters() {
        this._elemento.removeChild(this._elemento.childNodes[0]);
    }  
}

