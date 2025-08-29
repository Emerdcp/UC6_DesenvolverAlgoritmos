# Exercício 01

1. Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule 
seu peso ideal, utilizando as seguintes fórmulas:

- Para homens: (72.7*h) - 58
- Para mulheres: (62.1*h) - 44.7


```
programa {
  inclua biblioteca Matematica --> mat

  funcao inicio() {
    real altura = 0, totalh = 0, totalm = 0
    caracter sexo, continua = 'S'

    enquanto (continua == 'S' ou continua == 's'){
      escreva("Informe sua Altura: ")
      leia(altura)
      escreva ("Digite opção (H)omem e (M)ulher: ")  
      leia (sexo) 

      totalh = (72.7 * altura) - 58
      totalm = (62.1 * altura ) - 44.7

      se(sexo == 'h' ou sexo == 'H'){
        escreva("O resulta do peso ideal para Homem: " + mat.arredondar(totalh, 2) + " Kg")
      } senao
      se(sexo == 'm' ou sexo == 'M'){
        escreva("O resulta do peso ideal para Mulher: " + mat.arredondar(totalm, 2) + " Kg")
      } senao {
        escreva("Opção Invalida")
      }
      escreva("\nDeseja retornar ao Início (S)im ou (N)ão: ")
      leia(continua)
    }
    escreva("Programa finalizado.")
  }
}
```