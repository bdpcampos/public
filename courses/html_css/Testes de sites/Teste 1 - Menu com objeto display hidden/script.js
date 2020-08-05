function menu() {
    let botaoMenu = document.getElementById("menu")
    let menuSusp = document.getElementById("hidden")
    let valorMenu = getComputedStyle(menuSusp,null).display

    if (valorMenu  === 'none') {
        menuSusp.style.display = "block"
    } else {
        menuSusp.style.display = 'none'
    }
}