function tabuada(){
    var num = document.getElementById('txtn')
    var tab= document.getElementById('seltab')

    if(num.value.length == 0) {
        window.alert('Complete os campos')
} else{ 
    var n = Number(num.value)
    tab.innerHTML=''
    for(c=1; c<=10;c++){
        var item = document.createElement('option')
        item.text = `${n} X ${c} = ${n*c}`
        item.value= `tab${c}`
        tab.appendChild(item)
    }
}


}