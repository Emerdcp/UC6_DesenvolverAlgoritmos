function fnVerificarPeriodo(){
    let periodoSelecionado = document.getElementById("periodo").value

    if(periodoSelecionado == "m"){
        document.getElementById("resposta").innerText = "Manhã  ☀️"
        document.body.style.backgroundColor = "#4cb3c0"
        document.body.style.color = "#f8f9fa"
        document.getElementById("foto").src="imagens/bomDia.webp"
    } else if(periodoSelecionado == "t"){
        document.getElementById("resposta").innerText = "Tarde 😎"
        document.body.style.backgroundColor = "#f0f33d"
        document.body.style.color = "#000000ff"
        document.getElementById("foto").src="imagens/boaTarde.webp"
    } else if(periodoSelecionado == "n"){
        document.getElementById("resposta").innerText = "Noite 🌙";
        document.body.style.backgroundColor = "#1f1fc7"
        document.body.style.color = "#d1d1ca"
        document.getElementById("foto").src="imagens/boaNoite.jpg"
    } else {
        document.getElementById("resposta").innerText = ""
        document.body.style.backgroundColor = "#f8f9fa"
        document.body.style.color = "#000000"
    }
     


}

/* Cores Originais
texto #000000
fundo #f8f9fa

Cor Manhã
texto #000000
fundo #4cb3c0

Cor Tarde
texto #f0f33d
fundo #42423f

Cor Noite
texto #d1d1ca
fundo #1f1fc7
*/