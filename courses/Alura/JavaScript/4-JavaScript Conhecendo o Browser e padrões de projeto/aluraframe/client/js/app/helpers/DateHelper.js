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
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }

    static dataHojeParaCampo() {
        const dataHoje = new Date;
        
        return `${dataHoje.getFullYear()}-${dataHoje.getMonth()+1}-${dataHoje.getDate()}`;
    }
}