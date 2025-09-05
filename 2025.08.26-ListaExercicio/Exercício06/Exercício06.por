// 6. Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos 
// são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o 
// Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a 
// empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. O 
// programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no 
// mês.
//  Desconto do IR:
//  Salário Bruto até 900 (inclusive) - isento
//  Salário Bruto até 1500 (inclusive) - desconto de 5%
//  Salário Bruto até 2500 (inclusive) - desconto de 10%
//  Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações, dispostas 
// conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220.
//  

//Salário Bruto: (5 * 220) : R$ 1100,00
//sindicato
//  FGTS (11%) : R$ 121,00
//  (-) INSS ( 10%) : R$ 110,00
//  (-) IR (5%) : R$ 55,00 

//  Total de descontos : R$ 165,00
//  Salário Liquido : R$ 935,00


programa {
  inclua biblioteca Matematica --> mat
  funcao inicio() {
    real salarioBruto = 0, salarioLiquido = 0, sindicato = 0, fgts = 0, inss = 0, desconto = 0, ir = 0
    inteiro hora = 0, horaTrabalhada = 0
    caracter continua = 'S'

    enquanto(continua == 'S' ou continua =='s'){
      escreva("\nQual o seu valor hora trabalhado: ")
      leia(hora)
      escreva("Qual a quantidade de horas trabalhadas no mês: ")
      leia(horaTrabalhada)

      salarioBruto = hora * horaTrabalhada
      sindicato = (salarioBruto * (3/100))
      fgts = (salarioBruto * (11/100))
      inss = (salarioBruto * (10/100))

      escreva("\nvalor do Salário Bruto é R$ " + mat.arredondar(salarioBruto,2))
      escreva("\nvalor do Sindicato é R$ " + mat.arredondar(sindicato,2))
      escreva("\nvalor do FGTS é R$ " + mat.arredondar(fgts,2))
      escreva("\nvalor do INSS é R$ " + mat.arredondar(inss,2))

      se(salarioBruto <= 900){
        escreva("\nValor de IR é Isento")
      } senao
      se(salarioBruto <= 1500){
        ir = salarioBruto * (5/100 )
        escreva("\nValor de IR é: R$ "+ mat.arredondar(ir,2))
      }senao
      se(salarioBruto <= 2500){
        ir = salarioBruto * (10/100 )
        escreva("\nValor de IR é: R$ "+ mat.arredondar(ir,2))
      }senao{
        ir = salarioBruto * (20/100 )
        escreva("\nValor XXX de IR é: R$ "+ mat.arredondar(ir,2))
      }
      desconto = inss + ir
      salarioLiquido = salarioBruto - desconto

      escreva("\nvalor do Desconto é R$ " + mat.arredondar((desconto),2))
      escreva("\nvalor do Salário Líquido é R$ " + mat.arredondar((salarioLiquido),2))
    }    
  }
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 2476; 
 * @PONTOS-DE-PARADA = 59, 60, 61;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */