/*  Import declaration  */

import { Alerta } from "../models/Alerta.js"
import { AlertaView } from "../views/AlertaView.js"


/*  Class declaration  */

export class AlertaController {
    
    constructor() {
        this._alertaView = new AlertaView(document.querySelector('#alertaView'));
    }


    sucesso(texto) {
        this._criarAlerta(texto, 'alert-success')
    }

    informacao(texto) {
        this._criarAlerta(texto, 'alert-info')
    }

    cuidado(texto) {
        this._criarAlerta(texto, 'alert-warning')
    }

    perigo(texto) {
        this._criarAlerta(texto, 'alert-danger')
    }

    _criarAlerta(texto, classe){
        this._alertaView.update(new Alerta(texto), classe);
    }
}