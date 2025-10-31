function fnCalcular() {
  let valorConta = parseFloat(document.getElementById("valorConta").value)
  let valorPorcentagem = parseFloat(document.getElementById("valorPorcentagem").value)
  let funcao = document.getElementById("funcao").value

  valorPorcentagem = valorPorcentagem / 100

  let resultado = 0

  if(funcao === 'A'){
    resultado = valorConta + (valorConta * valorPorcentagem)
  }
  else if(funcao === 'D'){
    resultado = valorConta - (valorConta * valorPorcentagem)
  }

  document.getElementById("resultado").innerText = resultado.toFixed(2)
}

function fnLimpar(){
  document.getElementById('formulario').reset()
  document.getElementById('resultado').innerText = "0.00"
}
