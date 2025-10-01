let contador = 0, controle = 0

function fnStart(){
    document.getElementById("contador").innerHTML = contador
    if(controle == 0){
        contador ++
    }else if(controle == 10){
        contador --
    }
    
    if(contador == 10){
        controle = 10
    }else if(contador == 0){
        controle = 0
    }
}

function fnLigar(){
    setInterval(fnStart, 1000)
    document.getElementById("botao").disabled=true
}