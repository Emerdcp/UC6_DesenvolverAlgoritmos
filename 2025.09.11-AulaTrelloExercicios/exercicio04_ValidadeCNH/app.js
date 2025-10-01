function fnValidarIdade(){
    let nome = "", idade = 0
    nome = document.getElementById("nome").value
    idade = document.getElementById("idade").value

    if (idade >= 18){
        document.getElementById("Resultado").innerText = nome + " está Aprovado! Pode dirigir.";
    } else{
        document.getElementById("Resultado").innerText = nome + " está Reprovado! Ainda não pode dirigir";
    }
    
}