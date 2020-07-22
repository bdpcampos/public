from desafio_115.graficos import menu, linha, txt_amarelo_bold, txt_azul
from desafio_115.validacao import validacao_menu, validacao_idade, validacao_nome
from desafio_115.txt import inserir_txt, ver_txt


while True:
    menu('MENU PRINCIPAL')
    print(f'{txt_amarelo_bold("1")} - {txt_azul("Ver pessoas cadastradas")}')
    print(f'{txt_amarelo_bold("2")} - {txt_azul("Cadastrar nova Pessoa")}')
    print(f'{txt_amarelo_bold("3")} - {txt_azul("Sair do Sistema")}')
    linha()
    opcao = validacao_menu()

    if opcao == 1:
        menu("PESSOAS CADASTRADAS")
        ver_txt()


    if opcao == 2:
        menu("NOVO CADASTRO")
        nome = validacao_nome()
        idade = validacao_idade()
        inserir_txt(f'{nome:<30}{idade:<3}anos    ')
        print(f'Novo registro de {nome} adcionado.')

    if opcao == 3:
        menu("Saindo do sistema... Até Logo!")
        break
