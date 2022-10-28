function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //usa-se o getHours para ter a hora atual e o FullYear para ter o ano
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente`)
    } else {
        var fsex = document.getElementsByName('radsex')//pega o nome de um elemento name=""
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img') //cria um elemento <img> 
        img.setAttribute('id', 'foto') //atribui um id foto ao elemento <img id='foto'>

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', `img/Manha.png`)
            } else if (idade < 21) {
                //'Jovem'
                img.setAttribute(`src`, `img/Noite.png`)
            } else if (idade < 50) {
                //'Adulto'
                img.setAttribute(`src`, `img/Noite.png`)
            } else {
                //'Idoso'
                img.setAttribute(`src`, `img/Noite.png`)
            }
        } if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', `img/Manha.png`)
            } else if (idade < 21) {
                //'Jovem'
                img.setAttribute(`src`, `img/Noite.png`)
            } else if (idade < 50) {
                //'Adulto'
                img.setAttribute(`src`, `img/Noite.png`)
            } else {
                //'Idoso'
                img.setAttribute(`src`, `img/Noite.png`)
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} ANOS de idade`
        res.appendChild(img)
    }
}

