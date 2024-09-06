## Aplicação de Busca de Motocicletas Imersão Alura-GogleGemini

**Descrição:**
Esta aplicação web permite aos usuários pesquisarem por modelos de motocicletas em um banco de dados. Ao inserir um modelo específico, o sistema retorna uma lista de resultados relevantes, incluindo imagem, descrição e link para mais informações.

**Tecnologias Utilizadas:**
* **HTML:** Estrutura da página web.
* **CSS:** Estilização da interface do usuário.
* **JavaScript:** Lógica de busca e manipulação do DOM.

**Funcionalidades:**
* **Busca por modelo:** Permite ao usuário pesquisar por modelos específicos de motocicletas.
* **Resultados detalhados:** Exibe resultados relevantes com imagem, descrição e link.

**Como usar:**
1. **Clone o repositório:** Use o Git para clonar este repositório para o seu computador local.
2. **Abra o arquivo index.html:** Abra o arquivo `index.html` em seu navegador web.
3. **Realize uma pesquisa:** Insira o modelo da motocicleta desejada no campo de pesquisa e clique no botão "Pesquisar".

**Contribuições:**
Contribuições são bem-vindas! Sinta-se à vontade para abrir um pull request. Algumas ideias para futuras melhorias incluem:

* **Filtros:** Adicionar filtros para pesquisar por marca, ano, preço, etc.
* **Mapas:** Integrar um mapa para mostrar a localização das motocicletas.
* **Favoritos:** Criar uma lista de favoritos para guardar os resultados da pesquisa.

**Estrutura do projeto:**
* `index.html`: Página principal da aplicação.
* `style.css`: Arquivo de estilos CSS.
* `app.js`: Lógica JavaScript da aplicação.
* `dados.js`: Dados das motocicletas (JSON).

**Diagrama de classes:**
classDiagram
    Motocicleta : modelo
    Motocicleta : marca
    Motocicleta : ano
    Motocicleta : descrição
    Motocicleta : imagem
    Motocicleta : link

    Usuario : nome
    Usuario : email
    Usuario : senha
    Usuario : favoritos

    Busca : pesquisarPorModelo(modelo)
    Busca : filtrarPorMarca(marca)

    Motocicleta --|> Busca
    Usuario --o> Motocicleta

Acesse a pagina através do link: https://imersao-alura-gemini-umber.vercel.app/
