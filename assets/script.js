const apiKey = "";

async function buscarFilme() {
  const nome = document.getElementById("nomeFilme").value;
  const url = `https://www.omdbapi.com/?t=${encodeURIComponent(nome)}&apikey=${apiKey}`;

  if (nome.trim() === "") {
    alert("Digite o nome de um filme!")
    return;
  }


  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();

    if (dados.Response === "True") {
      document.getElementById("filme").innerHTML = `
        <h2>${dados.Title} (${dados.Year})</h2>
        <img src="${dados.Poster}" alt="Pôster do filme" />
        <p><strong>Gênero:</strong> ${dados.Genre}</p>
        <p><strong>Sinopse:</strong> ${dados.Plot}</p>
      `;
    } else {
      document.getElementById("filme").innerHTML = `<p>Filme não encontrado.</p>`;
    }
  } catch (erro) {
    console.log(erro);
    document.getElementById("filme").innerHTML = `<p>Erro ao buscar o filme.</p>`;
  }
}
