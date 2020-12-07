/*  Import declaration  */


/*  Class declaration  */

export class View {

    constructor(elementoDoDOM) {
        this._elemento = elementoDoDOM;
    }


    //Método abstrato
    _template(modelo) {throw new Error("O método _template da View é abstrato e deve ser implementado")}


    update(modelo) {
        this._elemento.innerHTML = this._template(modelo);
    }
} 