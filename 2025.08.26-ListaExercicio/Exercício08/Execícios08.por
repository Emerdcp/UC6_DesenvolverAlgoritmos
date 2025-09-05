// 8. Desenvolva um programa que faça a tabuada de um número qualquer inteiro que será 
// digitado pelo usuário, mas a tabuada não deve necessariamente iniciar em 1 e terminar em 10, 
// o valor inicial e final devem ser informados também pelo usuário, conforme exemplo abaixo:
// Montar a tabuada de: 5
// Começar por: 4
// Terminar em: 7
// Vou montar a tabuada de 5 começando em 4 e terminando em 7:
// 5 X 4 = 20
// 5 X 5 = 25
// 5 X 6 = 30
// 5 X 7 = 35
// Obs: Você deve verificar se o usuário não digitou o final menor que o inicial.

programa {
  inclua biblioteca Matematica --> mat
  funcao inicio() {

    inteiro tabuada = 0, valorInicial = 0, valorFinal = 0, resultado = 0
    caracter continua = 'S'

    enquanto(continua == 'S' ou continua == 's'){
    escreva("Escolha que seu número da Tabuada: ")
    leia(tabuada)

    escreva("Digite Qual Inica: ")
    leia(valorInicial)
    escreva("Digite Qual Termina: ")
    leia(valorFinal)

    para (inteiro c = valorInicial; c <= valorFinal; c++){
      resultado = tabuada * c
      escreva ("Tabuada ", tabuada, " x ", c, " = ", resultado, "\n")
    }

    escreva("\nDeseja retornar ao Início (S)im ou (N)ão: ")
    leia(continua)
   }   
  }
}
