function tabuada() {
    var numero = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')
    
    if (numero.value.length == 0) {
        window.alert(`Dados invalidos`)        
    } else {
        var n = Number(numero.value)
        tab.innerHTML = ''
        for(var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
    
}