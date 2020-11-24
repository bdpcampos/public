export class SistemaAutenticacao {
    static login(usuario, senha) {
        if(SistemaAutenticacao.ehAutenticavel(usuario)) {
            return usuario.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel && //Se a chave "autenticar" existe dentro do objeto, neste caso o método autenticar. Evita erro pela falta do método, no objeto, em tempo de execução.
        autenticavel.autenticar instanceof Function;  //Também se o método autenticar existe e é uma função (instância de uma Function).
    }
}