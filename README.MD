# Github-Blog

![Capa](https://user-images.githubusercontent.com/80429145/196185849-78bcaa6e-32b4-40d4-bb1f-9cec208ab17c.png)



###  Projeto de estudo de ReactJS

#### Feito com

- [HTML5-markup](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
- [StyledComponent](https://styled-components.com/docs)
- [React-Hook-Form](https://react-hook-form.com/)
- [React-Router-Dom](https://reactrouter.com/en/v6.3.0/getting-started/overview)
- [Use-context-selector](https://github.com/dai-shi/use-context-selector)
- [React-Markdown](https://github.com/remarkjs/react-markdown)
- [Date-fns](https://date-fns.org/docs/Getting-Started)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Font-Awesome](https://fontawesome.com/docs/web/use-with/react/)
- [React](https://pt-br.reactjs.org/docs/getting-started.html)
- [Typescript](https://www.typescriptlang.org/)


### O projeto

Github-blog se trata de um blog com suas informações do github e as issues do repositório são os posts do blog. Um projeto simples para praticar o consumo de API, onde é necessário:

- Listagem do seu perfil com imagem, número de seguidores, nome e outras informações disponíveis pela API do GitHub.
- Listar e filtrar todas as issues do repositório com um pequeno resumo do conteúdo dela
- Criar uma página para exibir um post (issue) completo

Primeiramente optei por testar as rotas da API pelo insomnia, depois de entender como funcionam as rotas e as requisições, comecei pela estilização e criação das páginas para então fazer a comunicação do projeto com a API do github e utilizar o gerenciamento de estados. 

Na parte de estilização da página tentei chegar o mais próximo do layout que foi disponibilizado no Figma, o que ajudou bastante com tamanhos de fontes e espaçamentos, utilizei os ícones do font-awesome integrado com react e também utilizei o contexto do react para facilitar o gerenciamento de estados e pude testar uma biblioteca que auxilia muito quando utilizamos o contexto, o Use context selector, basicamente com ele é possível selecionar qual a informação do contexto que o seu componente vai utilizar para que ele não seja renderizado sempre que as outras informações mudarem, sendo somente renderizado quando aquela informação específica for alterada. 

Para testar o projeto é só baixar os arquivos desse repositório, acessar a pasta pelo terminal e digitar o comando `npm install` para atualizar as dependencias do projeto e em seguida `npm run dev` ele vai rodar no localhost na porta 5173. Se quiser alterar o repositório é só acessar o arquivo `data.ts` que está no diretório `src/context` e alterar o nome de usuário em `user: ` e o nome do repositório em `repository: ` mas nesse caso é necessário utilizar um repositório público e que tenha no mínimo 1 issue.

![Captura de tela de 2022-10-17 10-10-19](https://user-images.githubusercontent.com/80429145/196186006-3f71421c-4822-423e-b77f-7a9ca2c49a13.png)

![Captura de tela de 2022-10-17 10-10-30](https://user-images.githubusercontent.com/80429145/196186054-f0aedf0c-7adf-4646-81b1-5dcb9a246eea.png)



