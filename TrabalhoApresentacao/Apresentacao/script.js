function fazerLogin() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const msg = document.getElementById("loginMsg");

  if (usuario === "cliente" && senha === "123") {
    msg.textContent = "✅ Login realizado com sucesso!";
    setTimeout(() => {
      document.getElementById("login-section").classList.add("hidden");
      document.getElementById("produtos-section").classList.remove("hidden");
    }, 1000);
  } else {
    msg.textContent = "❌ Usuário ou senha incorretos.";
  }
}

function comprarProduto() {
  document.getElementById("compraMsg").textContent = "💳 Compra realizada com sucesso!";
  setTimeout(() => {
    document.getElementById("produtos-section").classList.add("hidden");
    document.getElementById("nota-section").classList.remove("hidden");
    emitirNotaFiscal();
  }, 1000);
}

function emitirNotaFiscal() {
  const nota = `
    <h3>Nota Fiscal</h3>
    <p>Produto: Camiseta Rosa</p>
    <p>Valor: R$ 49,90</p>
    <p>Cliente: Cliente Exemplo</p>
    <p>Status: ✅ Pago</p>
  `;
  document.getElementById("notaFiscal").innerHTML = nota;
}

function novaCompra() {
  document.getElementById("nota-section").classList.add("hidden");
  document.getElementById("login-section").classList.remove("hidden");
  document.getElementById("usuario").value = "";
  document.getElementById("senha").value = "";
  document.getElementById("loginMsg").textContent = "";
}
