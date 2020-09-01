function validar(login,senha){
    if(login === 'bruno' && senha === '123'){
        return true
    }else{
        return false
    }

}

exports.validar = validar  //exporta a função para outros arquivos verem