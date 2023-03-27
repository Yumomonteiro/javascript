function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas`
    if (hora >= 0 && hora <12) {
        //bom dia
        img.src = 'imagens/manha.png'
        document.body.style.background = '#F7B390'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#B18D5B'
    } else {
        //Boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#2A4149'
    }
    }
