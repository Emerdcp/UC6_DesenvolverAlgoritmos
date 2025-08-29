programa {
  inclua biblioteca Matematica --> mat
  funcao inicio() {
    real custoFinal = 0
    real custoFabrica = 10000
    real percentualDistribuidor = 0.28
    real percentualImpostos = 0.45

    custoFinal = (custoFabrica + (custoFabrica * percentualDistribuidor) + (custoFabrica * percentualImpostos))

    escreva("Valor Final do Veículo é: R$ " + mat.arredondar(custoFinal, 2))    
  }
}

