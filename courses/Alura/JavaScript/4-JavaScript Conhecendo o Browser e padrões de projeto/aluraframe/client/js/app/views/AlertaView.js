/*  Import declaration  */


/*  Class declaration  */

export class AlertaView {

    constructor(elementoDoDOM) {
        this._elemento = elementoDoDOM;
    }


    _template(texto) {
        return `<p>${texto}</p>`;
    }

    sucesso(texto) {
        this._elemento.classList.add('alert-success');
        this._update(texto);

        this._clearAlert();
    }

    informacao(texto) {
        this._elemento.classList.add('alert-info');
        this._update(texto);

        this._clearAlert();
    }

    cuidado(texto) {
        this._elemento.classList.add('alert-warning');
        this._update(texto);

        this._clearAlert();
    }

    perigo(texto) {
        this._elemento.classList.add('alert-danger');
        this._update(texto);

        this._clearAlert();
    }


    _update(texto) {
        this._elemento.innerHTML = this._template(texto);
    }

    _clearAlert() {
        setTimeout(this._clearParameters.bind(this), 3000);
    }

    _clearParameters() {
        this._update("");
        this._elemento.classList.remove('alert-success', 'alert-info', 'alert-warning', 'alert-danger');
    }   
}

