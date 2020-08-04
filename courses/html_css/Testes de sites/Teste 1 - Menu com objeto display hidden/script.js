function menu() {
    let botaoMenu = document.getElementById("menu")
    let menuSusp = document.getElementById("hidden")

    if (menuSusp.style.display === 'none') {
        menuSusp.style.display = "block"
    } else {
        menuSusp.style.display = "none"
    }
}