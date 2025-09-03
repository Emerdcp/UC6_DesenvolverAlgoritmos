// 7. Faça um Programa que peça os 3 lados de um triângulo. O programa deverá informar se os 
// valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: 
// equilátero, isósceles ou escaleno.
// Dicas:
//  Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o 
// terceiro;
//  Triângulo Equilátero: três lados iguais;
//  Triângulo Isósceles: quaisquer dois lados iguais;
//  Triângulo Escaleno: três lados diferentes;

programa {
  inclua biblioteca Matematica --> mat
  funcao inicio() {

    real lado1 = 0, lado2 = 0, lado3 = 0, equilatero = 0, isosceles = 0, escaleno = 0
    caracter continua='S'

    enquanto(continua == 'S' ou continua =='s'){
      escreva("Digite lado 1: ")
      leia(lado1)
      escreva( )
      leia(lado2)
      escreva("Digite lado 3: ")
      leia(lado3)

      se(lado1 == lado2 e lado2 == lado3 e lado3 == lado1){
        escreva("O Triângulo é Equilátero, pois os 3 lado são igual")
      }senao
      se(lado1 == lado2 ou lado2 == lado3 ou lado3 == lado1){
        escreva("O Triângulo é Isósceles, pois os 2 lado são igual")
      }senao
        escreva("O Triângulo é Escaleno, pois os 3 lado são diferentes")
      
      escreva("\nDeseja retornar ao Início (S)im o   u (N)ão: ")
      leia(continua)
    }  
    escreva("Programa finalizado.")  
  }
}
