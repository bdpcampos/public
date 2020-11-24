/* Import module declarations */

import *  as Date from '../lib/date.js';



/* Variable declarations */

// Array with form input objects
const formInputs = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

// tbody object
const tbody = document.querySelector('table tbody');



/* Event listener declarations */

//Take form inputs and builds table row with it in submit event.
document.querySelector('.form').addEventListener('submit', function (event) {

    event.preventDefault(); //Stop refreshing page after submit.

    if (!Date.isDateFuture(formInputs[0].value)) {
        const tr = document.createElement('tr');

        formInputs.forEach(function (input) {
            const td = document.createElement('td');
            td.textContent = input.value;

            tr.appendChild(td);
        }) //Fills 3 of 4 tds available

        const tdVolume = document.createElement('td');
        const volumeValue = formInputs[1].value * formInputs[2].value; //Multiply qtd and value to reach volume.
        tdVolume.textContent = volumeValue.toFixed(2);
        tr.appendChild(tdVolume);

        tbody.appendChild(tr);

    } else {
        alert("A data não pode ser maior do que hoje!")
    }

    Date.setTodayDate('#data') //Date input value goes back to today date.
    formInputs[0].focus();
    formInputs[1].value = 1;
    formInputs[2].value = 0.00;
});



/* Main code */

Date.setTodayDate('#data'); //Sets date input to today date.