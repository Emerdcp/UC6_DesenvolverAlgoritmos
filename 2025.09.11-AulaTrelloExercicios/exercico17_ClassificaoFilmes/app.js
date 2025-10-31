let contatos = [];

function fnSalvar() {
  let umContato = {
    nome: document.getElementById("nome").value,
    telefone: document.getElementById("telefone").value,
    email: document.getElementById("email").value,
    foto: document.getElementById("id-foto").value,
  };
  contatos.push(umContato);
}

function fnListar() {
  let dados = ""

  contatos.forEach((umContato, i) => {
    // dados += `${umContato.nome} <br> ${umContato.telefone} <br> ${umContato.email} <br> <img src='${umContato.foto}' style= 'width:150px;border-radius:100px'><br>`;
    dados += `
    <div class="col-3 mb-4">
      <div class="card" style="width: 18rem;">
        <img src="${umContato.foto}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${umContato.nome}</h5>
          <p class="card-text">Telefone: ${umContato.telefone}</p>
          <p class="card-text">Email: ${umContato.email}</p>
          <button type="button" onclick='fnExcluir(${i})' class="btn btn-danger">Excluir</button>
        </div>
      </div>
    </div>`
  })

  document.getElementById(
    "listaDeContatos"
  ).innerHTML = `<div class="col-auto">${dados}</div>`
}

function fnExcluir(indice) {
  contatos.splice(indice,1)
  fnListar()
 }

 function fnLimpar(){
  document.getElementById('formulario').reset()
 }

document.querySelector("#btSalvar").addEventListener("click", function () {
  fnSalvar()
  fnListar()
  fnLimpar()
})

