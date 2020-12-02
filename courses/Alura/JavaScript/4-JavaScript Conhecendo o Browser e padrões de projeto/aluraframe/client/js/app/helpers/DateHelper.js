/*  Import declaration  */


/*  Class declaration  */

export class DateHelper {

    constructor() {
        throw new Error('Esta classe não pode ser instanciada');
    }


    static textoParaData(texto) {
        if(!(/^\d{4}-\d{2}-\d{2}$/.test(texto))) {
            throw new Error('Deve estar no formato yyyy-MM-dd')
        }

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2)); 
        //New Date recebe o mes de 0 a 11.  "..." spread operator.
    }

    static dataParaTexto(data) {
        return `${("0"+data.getDate()).slice(-2)}/${("0"+(data.getMonth()+1)).slice(-2)}/${data.getFullYear()}`;  //Adiciona o 0 na frente para não retornar mes e/ou dia com 1 digito. Se houverem tres dígitos o slice(-2) pega apenas os últimos 2
    }

    static dataHojeParaCampo() {
        const dataHoje = new Date;
        
        return `${dataHoje.getFullYear()}-${("0"+(dataHoje.getMonth()+1)).slice(-2)}-${("0"+dataHoje.getDate()).slice(-2)}`;   //Adiciona o 0 na frente para não retornar mes e/ou dia com 1 digito. Se houverem tres dígitos o slice(-2) pega apenas os últimos 2
    }

    static ehDataFutura(data) {
        const dataHoje = new Date;

        return data > dataHoje;
    }
}