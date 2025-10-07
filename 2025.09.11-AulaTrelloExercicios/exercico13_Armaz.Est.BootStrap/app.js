let numeroDeVagas = []
let veiculos = []

function fnSalvarVeiculo(){
    numeroDeVagas.push(document.getElementById("numero_vaga").value)
    veiculos.push(document.getElementById("veiculo").value)
}

function fnListaVeiculos(){
    // for(declaração contador; condição; incremento){}

    document.getElementById("tabela_veiculos").innerHTML = ""
    for(let i = 0; i < veiculos.length; i++){
        console.log(numeroDeVagas[i], veiculos[i])
        document.getElementById("tabela_veiculos").innerHTML += `<tr>`
        document.getElementById("tabela_veiculos").innerHTML += `<td> 
        ${numeroDeVagas[i]} </td><td> ${veiculos[i]}</td>`   
        document.getElementById("tabela_veiculos").innerHTML += `</tr>`
    }
    
}

function fnLimpar(){
    document.getElementById("tabela_veiculos").value = ""
}



    // console.dir(numeroDeVagas)
    // console.dir(veiculos)
    // document.getElementById("tabela_veiculos").innerHTML += "<tr>"
    // document.getElementById("tabela_veiculos").innerHTML += `<td> ${numeroDeVagas[0]} </td><td> ${veiculos[0]}</td>`   
    // document.getElementById("tabela_veiculos").innerHTML += "</tr>"  


// EXEMPLO DE LAÇO DE REPETIÇÃO DA FUNÇÃO function fnListaVeiculos(){

    // let i = 0
    // while(i < veiculos.length){
    //     console.log(veiculos[i], numeroDeVagas[i])
    //     i++
    // }
    
    //for(declaração contador; condição; incremento){}
    // for(let i = 0; i < veiculos.length; i++){
    //     console.log(veiculos[i], numeroDeVagas[i])
    // }

    // document.getElementById("tabela_veiculos").innerHTML += "<tr>"
    // document.getElementById("tabela_veiculos").innerHTML += `<td> ${numeroDeVagas[0]} </td><td> ${veiculos[0]}</td>`   
    // document.getElementById("tabela_veiculos").innerHTML += "</tr>"   