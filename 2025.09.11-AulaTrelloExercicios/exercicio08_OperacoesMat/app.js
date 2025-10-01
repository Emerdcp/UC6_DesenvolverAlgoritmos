function fnCalcular(){
    let resultado = 0, valor1 = 0, valor2 = 0
    valor1 = parseFloat(document.getElementById("valor1").value)
    valor2 = parseFloat(document.getElementById("valor2").value)

    if(document.getElementById("adicao").checked == true){
        resultado = valor1 + valor2
    }

    if(document.getElementById("subtracao").checked == true){
        resultado = valor1 - valor2
    }

    if(document.getElementById("multiplicacao").checked == true){
        resultado = valor1 * valor2
    }

    if(document.getElementById("divisao").checked == true){
        resultado = valor1 / valor2
    }

    document.getElementById("resultado").innerHTML = resultado
}
