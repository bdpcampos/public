import urllib
import urllib.request
import datetime
import time
while True:
    try:
        page = urllib.request.urlopen('http://pudim.com.br/')
    except urllib.error.URLError:
        print('\033[31mO site pudim não está acessível no momento.\033[m', end = ' - ')
    else:
        print('\033[34mConsegui acessar o site do pudim com sucesso!\033[m', end = ' - ')
    finally:
        print(f'{datetime.datetime.now()}')
        time.sleep(5)
