// 4. Faça um programa que calcule o reajuste de salário, solicite ao usuário o salário e a 
// porcentagem a ser reajustado. Exemplo:
//  salário = 1.000,00
//  reajuste = 15%
//  Salário Reajustado = 1.150,00

programa {
  inclua biblioteca Matematica --> mat
  funcao inicio() {
    real salario=0, reajuste=0
    escreva("Digite seu salário: R$ ")
    leia(salario)    
    escreva("Qual a Porcentagem do Ajuste %: ")
    leia(reajuste)

    reajuste = (salario*(reajuste/100))
    salario = salario + reajuste

    escreva("Seu reajuste foi de R$ " + mat.arredondar(reajuste,2))
    escreva("\nSeu novo salário é R$ " + mat.arredondar(salario,2))
  }
}
