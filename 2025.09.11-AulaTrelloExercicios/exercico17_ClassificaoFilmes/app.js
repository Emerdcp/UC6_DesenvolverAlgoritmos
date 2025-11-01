// localStorage serve para poder guarda os dados no navegador mesmo com ele atualizado

let filmes = [];

if (localStorage.getItem("filmes")) {
  filmes = JSON.parse(localStorage.getItem("filmes"));
  fnListar(); // mostra os filmes salvos logo que a página abre
}


function fnSalvar() {
  let umFilme = {
    nomeFilme: document.getElementById("nomeFilme").value,
    fotoCapa: document.getElementById("fotoCapa").value,
    ano: document.getElementById("ano").value,
    classificacao: document.getElementById("classificacao").value,
    trailer: document.getElementById("trailer").value,
    genero: document.getElementById("genero").value,
    duracao: document.getElementById("duracao").value,
    descricao: document.getElementById("descricao").value,
  };
  filmes.push(umFilme);

  // Salva no localStorage
  localStorage.setItem("filmes", JSON.stringify(filmes))

  // Atualiza a listagem
  fnListar();
  fnLimpar();
}

function fnListar() {
  let dados = ""

  filmes.forEach((umFilme, i) => {

    // Converter para apresentar vídeo
    let linkTrailer = umFilme.trailer.replace("watch?v=", "embed/")

    dados += `
    <div class="col-12 col-sm-6 col-md-4 mb-4">
      <div class="card" style="width: 18rem;">
      <img src="${umFilme.fotoCapa}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${umFilme.nomeFilme}</h5>

          <p class="card-text text-muted">
            ${umFilme.ano} | ${umFilme.classificacao} | ${umFilme.genero} | ${umFilme.duracao}
          </p>

          <p class="card-text"><strong>Ano:</strong> ${umFilme.descricao}</p>

          <div class="ratio ratio-16x9 mb-3">
            <iframe src="${linkTrailer}" title="Trailer de ${umFilme.nomeFilme}" allowfullscreen></iframe>
          </div>

          <button type="button" onclick='fnExcluir(${i})' class="btn btn-danger">Excluir</button>
        </div>
      </div>
    </div>`
  })


  document.getElementById("classicacaoFilmes").innerHTML = dados
}


function fnExcluir(indice) {
  filmes.splice(indice, 1)
  localStorage.setItem("filmes", JSON.stringify(filmes)); // atualiza o localStorage
  fnListar()
}

function fnLimpar() {
  document.getElementById('formulario').reset()
}

document.querySelector("#btSalvar").addEventListener("click", function () {
  fnSalvar()
  fnListar()
  fnLimpar()
})


