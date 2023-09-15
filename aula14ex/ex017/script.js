function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        alert('Por favor, digite um número!')
    } else {
       let n = Number(num.value) 
       let c = 1
       tab.innerHTML = ''// Para aparecer a outra tabuada/Para não ficar uma tabuada embaixo da outra
       while (c <= 10){
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        // item.value = `tab${c}` Para eu saber qual número foi clicado/ No JavaScript não teve diferença
        tab.appendChild(item)
        c++
       }
    }
    
}