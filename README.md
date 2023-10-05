# API-Filmes

## Sobre

Para fins educativos, criei um api de filmes com o que estudei no 2º modulo na Cubos Academy. Com ela detalharei e mostrarei o que foi feito em aula.

A ideia é criar um repositório que auxilie e que possa servir como uma base para utilizar o que foi passado.

Nela mostrarei:

 - Uma organização para um API Rest
 
 - Conectar em um servidor com o pacote express
 
 - Utilizar verbos e cada finalidade
   
 - Leitura e escrita de arquivos

 - Utilização de funções assincronas

## Ferramentas

- <div>
    <img src="https://seeklogo.com/images/I/insomnia-logo-A35E09EB19-seeklogo.com.png" width="15" height="15"/>
    <span style="margin: 0;">Insomnia</span>
</div>

  - <div>
    <img src="https://tinyurl.com/yw4r9fvx" width="15" height="15" />
    <span style="margin: 0;">VSCode</span>
</div>

## Bibliotecas

 - Express
   
 - Nodemon
   
 - FS
   
## Primeiros Passos

### Criação do arquivo package.json para aplicação

  ```
  npm init -y
  ```
  
### Criação do arquivo .gitignore para não incluir o node_modules no repositório

### Instalação do pacote do Express (4.18.2)

  ```
  npm install express
  ```
  
### Instalação do pacote do Nodemon (3.0.1) para desenvolvimento por isso o -D

  ```
  npm install -D nodemon
  ```

### Criação da pasta src e criação do arquivo index.js
<div align="center">
  <img src="https://i.imgur.com/fadnnzS.png" />
</div>

### Configurando o index.js

   - Chamada do pacote express

   - Utilização de dados tipo json

   - Utilizar a porta 3000 para o servidor

 <div align="center">
  <img src="https://i.imgur.com/yYzBIKH.png" />
</div>

### Criação e primeira configuração do arquivo routes.js (rotas)
 
   - Dentro da pasta src crie o arquivo routes.js

   - Import o pacote express que sera usado para as rotas

   - exportacao de rotas

 <div align="center">
  <img src="https://i.imgur.com/d0MXaML.png" />
</div>

### Criação da pasta data, onde guardaremos nosso arquivo json de filmes

### Criação da pasta controller, onde colocaremos nossos controladores.

   Os controladores são os arquivos onde estarão as funções para controlar nossa aplicação.

   Aqui utilizaremos um controlador que é filmes.js

### Criação da pasta middleware, onde colocaremos nossos intermediários.

   Aqui criarei um de autentificação e outro de verificação dos dados enviados para o servidor

<div align="center">
  <img src="https://i.imgur.com/MJIwCma.png" />
</div>

### Criação dos dados filmes.json
  
  Eu já criei o filmes.json um array de objetos filme, esse array colocarei 10 filmes. Ficando dessa maneira para cada filme:

       {
             "id": 1,
             "titulo": "Forrest Gump",
             "ano": "1994",
             "genero": [
                 "Drama",
                 "Romance"
             ],
             "duracao": "2h22",
             "diretor": [
                 "Robert Zemeckis"
             ],
             "roteiro": [
                 "Wislson Groom",
                 "Eric Roth"
             ],
             "elenco": [
                 "Tom Hanks",
                 "Robin Wright",
                 "Gary Sinise",
                 "Sally Field"
             ],
             "imagem": "http://www.impawards.com/1994/posters/forrest_gump_xlg.jpg",
             "trailer": "https://www.imdb.com/video/vi3567517977/?ref_=ext_shr_lnk",
             "sinopse": "Os governos dos presidentes Kennedy e Johnson, os eventos do Vietnã e Watergate e outras histórias são mostradas através da perspectiva de um homem do Alabama com baixo quociente intelectual."
       }
  
   Como podem ver criei os campos id, titulo, ano, genero, duração, diretor, roteiro, elenco, imagem, trailer e sinopse.

   Todos os dados e trailer retirados do [IMDB](https://www.imdb.com/?ref_=nv_home), com as imagens retiradas do [IMP Awards](http://www.impawards.com)

### Chamando o arquivo de rotas no index.js

      const rotas = require('./routes');
  
      app.use(rotas);

## Leitura e Escrita de Arquivos

  Para a utilização dos dados, precisaremos ler e escrever no arquivo filmes.json.

  Com isso no arquivo do controlador filmes, vou criar duas funções.
  
  A primeira para leitura que utilizaremos para nossa primeira rota

### Leitura

  - Chamada o pacote fs/promises, que já vem no node.js para leitura de arquivos

  - Criação da função leituraArquivo, uma função assincrona pq é necessário esperar a promessa da função readFile do pacote fs.
    
  - Como teremos a chamada da função assincrona readFile, utilizamos o try catch para evitar erros e mostrar qual erro foi dado.

  - Chamar a função assincrona readFile com await, devido a ser uma função assincrona e ter que esperar sua resposta para retornar o array filmes.

  - O retorno do array de filmes e para isso sua transformação em json com JSON.parse(nome da variavel)

<div align="center">
  <img src="https://i.imgur.com/BdF55QE.png" />
</div>

### Criação da rota GET "/filmes" onde lista os filmes do arquivo filmes.json

   O verbo GET é usado para pegar dados do servidor, aqui pegaremos os filmes que estão salvo nos dados. Por isso utilizaremos GET

   - No controlador filmes.js criarei a função assincrona listarFilmes
     
   - Chamaremos a função leituraArquivos para criar o array de filmes e mostrar no body.

   - exportar a função listarFilmes

   - No arquivo routes.js chamar o controlador filmes.js como a constante filmes e criar a rota para listar os filmes

         rotas.get('/filmes', filmes.listarFilmes);

<div align="center">
  <img src="https://i.imgur.com/b3Kr5n4.png" />
</div>

### Rodando o Servidor

  Para rodar o servidor, eu gosto de ir no arquivo package.json e em scripts adicionar o seguinte script

      "start": "nodemon ./src/index.js"

 Assim para rodar o servidor utilizo:

    npm run start

<div align="center">
  <img src="https://i.imgur.com/UDC0QIs.png" />
</div>

 Servidor Rodando
 
### Utilização do Insomnia para as rotas

   - Criei uma nova coleção apenas para esse projeto, chamei de API - Filmes
     
   - Criei uma requisição GET

   - Usando a url http://localhost:3000/filmes

<div align="center">
  <img src="https://i.imgur.com/nxbiiUv.png" />
</div>
     
