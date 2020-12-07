/*  Import declaration  */

import { ProxyFactory } from "../services/ProxyFactory.js"


/*  Class declaration  */

export class Bind {

    constructor(model, view, ...props) { //... rest operator, qualquer parâmetro extra vai cair em props como se fosse um array
        const proxy = ProxyFactory.create(model, props, model => view.update(model));

        view.update(model);

        return proxy;
    }
}