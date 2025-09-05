programa {
  funcao inicio() {
    inteiro qtd_fotos = 0, controle = 1, controle_comentario = 1
    escreva("Instagrao = Lista de fotos")
    escreva("\n========================")
    escreva("\n")
    escreva("Quantas fotos você deseja exibir? ")
    leia(qtd_fotos)
    enquanto(controle <= qtd_fotos){
      escreva("Foto 000" + controle + "\n")

      enquanto(controle_comentario <= 3){
        escreva(" - Comentario 0" + controle_comentario + "\n")
        controle_comentario++
      }

      controle_comentario = 1
      controle ++
    }   
  }
}
