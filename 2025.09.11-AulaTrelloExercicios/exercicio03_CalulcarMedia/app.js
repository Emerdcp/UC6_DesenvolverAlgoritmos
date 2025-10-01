function fnCalcularMedia(){
    let vendedor = "", janeiro = 0, fevereiro = 0, marco = 0, media = 0
    vendedor = document.getElementById("vendedor").value 
    // alert("Seja bem Vindo(a) " + vendedor)
    document.getElementById("vendedorNome").innerText = vendedor

    //jeito um de fazer é colocar o Number, ex: janeiro = Number(document.getElementById("janeiro").value) 
    janeiro = document.getElementById("janeiro").value 
    fevereiro = document.getElementById("fevereiro").value
    marco = document.getElementById("marco").value

    media = (parseFloat(janeiro) + parseFloat(fevereiro) + parseFloat(marco)) / 3

    document.getElementById("media").innerText = media.toFixed(2)
}

// // exemplo de como criar uma função
// function bemvindo(){
//     alert("Seja bem vindo ao meu site")
//     console.log("Olá Mundo")
// }
// //Chamando a função
// bemvindo()