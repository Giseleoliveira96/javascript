function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value)> ano){
        alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebemenino1.png')
            } else if (idade < 30) {
                //jovem
                img.setAttribute('src','foto-jovemrapaz1.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-homem40.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-senhor1.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'foto-bebemenina1.png')
            } else if (idade < 30) {
                //jovem
                img.setAttribute('src', 'foto-jovemmoça1.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','foto-mulher40.png')
            } else {
                //idoso
                img.setAttribute('src','foto-senhora1.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
        
    }
}