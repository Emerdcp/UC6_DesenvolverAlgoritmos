// 5. Construa um programa que determine quanto será gasto para encher o tanque de um carro 
// (VG), sabendo-se que o preço da gasolina é de R$ 6,80 e o preço do álcool é de R$ 4,00. O 
// usuário fornecerá os seguintes dados: Tipo de carro (TC) (G – gasolina ou A – álcool) e 
// Capacidade do tanque (CT), em litros

programa {
  inclua biblioteca Matematica --> mat
  funcao inicio() {
    real gasolina=6.80, alcool=4, capacidadeTanque=0, valor=0
    caracter tipoCarro, continua='S'

    enquanto (continua == 'S' ou continua == 's'){
    limpa()

    escreva("Qual é o tipo, (G)asolina ou (A)lcool: ")
    leia(tipoCarro)

    se(tipoCarro == 'G' ou tipoCarro == 'g'){
      escreva("Qual a capacidade do Tanque em Litros: ")
      leia(capacidadeTanque)
      valor = capacidadeTanque * gasolina
      escreva("valor é R$ " + mat.arredondar(valor,2))
    }senao se(tipoCarro == 'A' ou tipoCarro == 'a'){
      escreva("Qual a capacidade do Tanque em Litros: ")
      leia(capacidadeTanque)
      valor = capacidadeTanque * alcool
      escreva("valor é R$ " + mat.arredondar(valor,2))
    }senao{
      escreva("Colocar um valor Valido de G ou A")
    }
    escreva("\nDeseja retornar ao Início (S)im ou (N)ão: ")
    leia(continua)
    }
    escreva("Programa finalizado.")
  }
}
