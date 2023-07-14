<p align="center">
  <h1 align="center"><a href="https://book-wis3.netlify.app/">Book Wise :rocket: </a></h1>
</p>

<p align="center" margin-top="25px" >
  <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/andreviapiana/book-wise" />

  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/andreviapiana/book-wise" />
</p>


Este é o resultado de um estudo aprofundado de React.js, realizado no treinamento Ignite, da Rocketseat.

___

## 💻 Sobre
O Book Wise é uma aplicação para o usuário realizar a avaliação de livros. Nela o usuário poderá criar a sua avaliação para os livros disponíveis.

A aplicação possuí um Banco de Dados próprio em MySQL, com uma lista de livros pré-cadastrada. Para criar avaliações, o usuário deve fazer Login, sendo possível realizar ele com o Google ou com o GitHub. No primeiro Login, o usuário será cadastrado automaticamente no Banco. Nos demais logins, as infos do usuário já serão carregadas diretamente deste Banco. Obs.: O Database está hospedado no PlanetScale. Por ser um serviço gratuito, o Banco poderá demorar alguns segundos para iniciar, e também poderá resetar após alguns minutos de inatividade, portanto apenas os usuários e as avaliações originais irão permanecer.

O projeto foi criado utilizando o Next.js, e seu foco é na renderização pelo lado do servidor (SSR), aumentando a performance com um carregamento da página de forma mais eficiente.

A página possuí responsividade, se adaptado aos dispositivos mobile, e ainda foram realizadas otimizações de SEO para melhorar a indexação da página pelos bots.

Fique à vontade para fazer Login na aplicação e cadastrar alguma avaliação de teste para ver o seu funcionamento. Existem Cards de leitura mais recente e avisos de criação de avaliação que só aparecem se você estiver logado!

___

## 🎨 Layout
A página em formato desktop é vista na imagem abaixo:

![BookWise Capa](https://github.com/andreviapiana/book-wise/assets/106932234/58b6cf8c-904d-436a-925e-f53b4127771f)

___

## 🛠 Tecnologias

As seguintes tecnologias foram empregadas na criação deste projeto:

- [ReactJs](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Stitches](https://www.npmjs.com/package/@stitches/react)
- [Next.js](https://nextjs.org/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Phosphor Icons](https://phosphoricons.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
- [ESLint](https://eslint.org/)
- [Prisma](https://www.npmjs.com/package/react-prisma)
- [ReactHookForm](https://www.react-hook-form.com/)
- [DateFNS](https://date-fns.org/)
- [HamburgerReact](https://www.npmjs.com/package/hamburger-react)
- [ReactSimpleStarRating](https://www.npmjs.com/package/react-simple-star-rating)
- [NextSEO](https://www.npmjs.com/package/next-seo)

___

## 🚀 Como utilizar

Clone o projeto para o local desejado em seu computador.

```bash
$ git clone git@github.com:andreviapiana/book-wise.git
```
___

#### 🚧 Executando o Projeto
```bash

# Navegue até o diretório
$ cd book-wise

# Instale as dependências necessárias
$ npm install

# Mude para o commit que contém o servidor local em SQLite
$ git checkout 4097adcddd54664084c5e1182f7af242332ddfc5

# Renomeie o arquivo .env.example para .env e adicione as informações necessárias nele

# Agora inicie o servidor do FrontEnd
$ npm run dev

# O terminal irá exibir o endereço local onde a aplicação está sendo executada:

  http://localhost:3000/

```

___

[O resultado FINAL pode ser visto aqui](https://book-wis3.netlify.app/)

___

Made with ❤️ by André Viapiana 👋🏽 [Get in Touch!](https://www.linkedin.com/in/andreviapiana/)

---
