const minhaPromise = function() {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET','https://api.github.com/users/bdpcampos');
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if(xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição malandro!')
                }
            }
        }
    })
}

minhaPromise()
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.warn(error);
    })

