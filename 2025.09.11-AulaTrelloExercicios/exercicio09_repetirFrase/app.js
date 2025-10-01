function fnRepetirFrase(){
    let quantidade = 0, frase= "", contador=0;
    
    frase = document.getElementById("frase").value
    quantidade = document.getElementById("quantidade").value
    //Para limpar a lista
    document.getElementById("lista_frases").innerHTML = ""

    while(contador < quantidade){
        document.getElementById("lista_frases").innerHTML += "<li>" + frase + "</li>"
        contador++ //contador = contador + 1
    }
}



    // let frase = document.getElementById("frase").value
    // let quantidade = parseInt(document.getElementById("quantidade").value)
    // let lista = document.getElementById("lista_frases")

    // lista.innerHTML = ""

    // // if (frase === "" || isNaN(quantidade) || quantidade <= 0){
    // //     alert("Digite um frase e uma quantidade válida!")
    // //     return
    // // }
    
    // for (let i = 1; i <= quantidade; i++){
    //     let item = document.createElement("li")
    //     item.textContent = frase
    //     lista.appendChild(item)
    // }