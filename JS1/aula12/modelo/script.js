function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = '/exe014/manha.jpg'
        document.body.style.background = '#ffd97c'
    } else if (hora >= 12 && hora < 18) {
        img.src = '/exe014/tarde.jpg'
        document.body.style.background = '#ee7562'
    } else {
        img.src = '/exe014/noite.jpg'
        document.body.style.background = '#4a312d'
    }
}
