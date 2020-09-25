const body = document.querySelector('body');

axios.get('https://api.github.com/users/bdpcampos')
    .then((response) => {
        console.log(response);
        const avatarURL = response.data.avatar_url;
        body.innerHTML = `<img src="${avatarURL}">`
    })
    .catch((error) => {
        console.warn(error);
    })
