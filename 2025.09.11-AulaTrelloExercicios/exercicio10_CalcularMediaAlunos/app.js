function fnCalcular(){
    let nome="",n1=0,n2=0,n3=0,n4=0,n5=0,n6=0,media=0
    nome = document.getElementById("nome").value
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)
    n3 = parseFloat(document.getElementById("n3").value)
    n4 = parseFloat(document.getElementById("n4").value)
    n5 = parseFloat(document.getElementById("n5").value)
    n6 = parseFloat(document.getElementById("n6").value)
    media =(n1+n2+n3+n4+n5+n6)/6
    document.getElementById("nome_res").innerHTML = nome
    document.getElementById("media").innerHTML=media.toFixed(2)
    fnEsconderExibir("painel_resultado","painel_formulario")
}
   
function fnEsconderExibir(exibir,esconder){
    document.getElementById(exibir).style.display="block"
    document.getElementById(esconder).style.display="none"
}

function fnLimpar(){
    document.getElementById("nome").value = ""
    document.getElementById("n1").value = ""
    document.getElementById("n2").value = ""
    document.getElementById("n3").value = ""
    document.getElementById("n4").value = ""
    document.getElementById("n5").value = ""
    document.getElementById("n6").value = ""
}

// function fnClear(){
//     document.getElementById("painel_formulario").reset
// }