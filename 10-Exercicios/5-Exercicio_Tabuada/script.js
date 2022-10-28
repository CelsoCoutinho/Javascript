function contando() {
    var tni = document.getElementById('txti')
    var tnf = document.getElementById('txtf')
    var tnp = document.getElementById('txtp')
    var ress = document.getElementById('res')
    var n1 = Number(tni.value)
    var n2 = Number(tnf.value)
    var pas = Number(tnp.value)
    if (pas == '') {
        window.alert('[Erro] Verifique os dados e tente novamente')
    } else {
        while (n1 <= n2) {
            ress.innerHTML += ` ${n1}`
            n1 = n1 + pas
        }
    }
}


