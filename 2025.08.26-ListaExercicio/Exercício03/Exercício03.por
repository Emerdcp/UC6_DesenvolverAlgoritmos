// 3. Faça um programa para calcular o juros simples segundo a fórmula abaixo. Todas as 
// informações devem ser solicitadas ao usuário.
//  J = C*i*n
 
//  Onde:
//  J = juros,
//  C = capital,
//  i = taxa de empréstimo
//  n = períodos
//  Exemplo: Vamos imaginar o seguinte cenário: um empréstimo de R$ 16.000,00 sobre a taxa 
// de 4% durante 4 meses

programa {
  inclua biblioteca Matematica --> mat
  funcao inicio() {
    real juros=0, capital=0 , taxaEmprestimo=0, totalValor=0
    inteiro periodo=0
    escreva("Informe qual o valor de Capital: R$ ")
    leia(capital)
    escreva("Qual é a taxa em %: ")
    leia(taxaEmprestimo)
    escreva("Qual é o período em meses: ")
    leia(periodo)

    juros = (capital*(taxaEmprestimo/100)*periodo)
    totalValor = (capital + juros)

    escreva("Valor Solicitado: R$ " + capital)
    escreva("\nValor da Taxa: " + taxaEmprestimo +"%")
    escreva("\nPerído proposto de " + periodo +" meses")
    escreva("\nTotal dos Juros é: R$ " + mat.arredondar(juros, 2))
    escreva("\nTotal do Valor é: R$ "+ totalValor)
  }
}

