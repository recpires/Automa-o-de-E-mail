function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Se campoPesquisa for uma string sem nada
    if(!campoPesquisa) {
        section.innerHTML = "Digite um Modelo Válido"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
 
    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags  = "";
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        tags = dado.tags.toLocaleLowerCase()
        // se titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // Cria o HTML de um item de resultado
            resultados += `
            <div class="item-resultado">
                <img src="${dado.imagem}">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">mais informações</a>
            </div>
        `;
        }
     

    }
    if(!resultados) {
        resultados = "<p>Modelo não Encontrado</p>"
    }
    // Atualiza o conteúdo da seção com os resultados gerados
    section.innerHTML = resultados;
}
// console.log(dados);
