def fatorial(num = 1, show = False):
    from time import sleep
    f = 1
    for x in range(num, 0, -1):
        f *= x
        if show:
            print(f'{f} ', end = '')
            sleep(0.3)
    return f

fatorial(5, show=True)