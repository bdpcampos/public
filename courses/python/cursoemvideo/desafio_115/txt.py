

def inserir_txt(texto):
    f = open("db.txt", "a")
    f.write(f'{texto}\n')
    f.close()


def ver_txt():
    f = open("db.txt", "a")
    f.close()
    f = open("db.txt", "r")
    if f.mode == 'r':
        contents = f.read()
        print(contents)
    f.close()