function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //Bom Dia!
        imagem.src = 'fotomanha.png.png'
        document.body.style.background ='#FBEB93' 
    } else if (hora >= 12 && hora < 18){
        //Boa Tarde!
        imagem.src = 'fototarde.png.png'
        document.body.style.background = '#DDBA3C'
    } else {
        //Boa Noite!
        imagem.src = 'fotonoite.png.png'
        document.body.style.background = '#001141'
    }
}
