/*  Import declaration  */

import { View } from "../views/View.js"


/*  Class declaration  */

export class AlertaView extends View {

    _template(modelo, classe) {
        return `<p class="${classe} alerta">${modelo.texto}</p>`;
    }


    update(modelo, classe) {
        this._criaParagrafo(modelo, classe);
        this._clearAlert();
    }

    _criaParagrafo(modelo, classe) {
        const span = document.createElement('SPAN');
        span.innerHTML = this._template(modelo, classe);
        this._elemento.prepend(span);
    }

    _clearAlert() {
        setTimeout(() => this._elemento.removeChild(this._elemento.lastChild), 4000); //Arrow function tem contexto léxico, ou seja, a sim que é declarada é como se usássemos o "bind" para amarrar o contexto do "this".
    }
}

