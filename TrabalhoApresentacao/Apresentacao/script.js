function login() {
  const user = document.getElementById('user').value;
  const pass = document.getElementById('pass').value;
  const msg = document.getElementById('msg');
  const store = document.getElementById('store');

  if (user === "cliente" && pass === "123") {
    msg.textContent = "✅ Login realizado com sucesso!";
    store.classList.remove('hidden');
  } else {
    msg.textContent = "❌ Usuário ou senha incorretos.";
  }
}

function comprar() {
  const compraMsg = document.getElementById('compraMsg');
  compraMsg.textContent = "🛍️ Compra realizada com sucesso! Nota fiscal emitida.";
}
