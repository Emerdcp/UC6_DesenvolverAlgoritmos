let n1 = 10, n2 = 2

console.log(n1+n2) // + operador de adição
console.log(n1-n2) // - operador de subtração
console.log(n1*n2) // * operador de multiplicação
console.log(n1/n2) // / operador de divisão
console.log(n1%n2) // % operador de módulo, pega o resto da divisão
console.log(n1**n2) // ** operador de esponenciação pega um número e eleca a outro 10²

document.getElementById("resultado_soma").innerText = n1+n2
document.getElementById("resultado_subtracao").innerText = n1-n2
document.getElementById("resultado_multiplicacao").innerText = n1*n2
document.getElementById("resultado_divisao").innerText = n1/n2
document.getElementById("resultado_restoDivisao").innerText = n1%n2
document.getElementById("resultado_esponenciacao").innerText = n1**n2
