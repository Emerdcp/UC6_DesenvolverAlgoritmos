function fnCalcularSaldoDeHoras(){
    let icone =""
    let nome= document.getElementById("nome").value
    let chSemanal = document.getElementById("chSemanal").value
    let chTrabalhada = document.getElementById("chTrabalhada").value
    let saldo = 0

    saldo = chTrabalhada -chSemanal

    if(saldo>=0){
       icone="😁"
    }else{
       icone="😭"
    }
    let msg = `${nome}  ${icone} ${saldo}`
    
    document.getElementById("lista_funcionarios").innerHTML +=`<li> ${msg} </li>`
}