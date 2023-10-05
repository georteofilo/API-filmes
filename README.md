# API-Filmes

## Sobre

Para fins educativos, criei um api de filmes com o que estudei no 2º modulo na Cubos Academy. Com ela detalharei e mostrarei o que foi feito em aula.

A ideia é criar um repositório que auxilie e que possa servir como uma base para utilizar o que foi passado.

Nela mostrarei:

 - Uma organização para um API Rest
 
 - Conectar em um servidor com o pacote express
 
 - Utilizar verbos e cada finalidade

 - Utilizar os status de requisição em cada resposta
   
 - Leitura e escrita de arquivos

 - Utilização de funções assincronas

## Ferramentas

- ![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

- ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

## Pacotes

 - ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
   
 - ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
   
 - fs, vem com o Node.js
   
## Primeiros Passos

### 1 - Criação do arquivo package.json para aplicação

  ```
  npm init -y
  ```
  
### 2 - Criação do arquivo .gitignore para não incluir o node_modules no repositório

### 3 - Instalação do pacote do Express (4.18.2)

  ```
  npm install express
  ```
  
### 4 - Instalação do pacote do Nodemon (3.0.1) para desenvolvimento por isso o -D

  ```
  npm install -D nodemon
  ```

### 5 - Criação da pasta src e criação do arquivo index.js
<div align="center">
  <img src="https://i.imgur.com/fadnnzS.png" />
  <p>Imagem da pasta src e do arquivo index.js</p>
</div>

### 6 - Configurando o index.js

   - Chamada do pacote express

   - Utilização de dados tipo json

   - Utilizar a porta 3000 para o servidor

 <div align="center">
  <img src="https://i.imgur.com/yYzBIKH.png" />
  <p>index.js</p>
</div>

### 7 - Criação e primeira configuração do arquivo routes.js (rotas)
 
   - Dentro da pasta src crie o arquivo routes.js

   - Import o pacote express que sera usado para as rotas

   - exportacao de rotas

 <div align="center">
  <img src="https://i.imgur.com/d0MXaML.png" />
  <p>routes.js</p>
</div>

### 8 - Criação da pasta data, onde guardaremos nosso arquivo json de filmes

### 9 - Criação da pasta controller, onde colocaremos nossos controladores.

   Os controladores são os arquivos onde estarão as funções para controlar nossa aplicação.

   Aqui utilizaremos um controlador que é filmes.js

### 10 -Criação da pasta middleware, onde colocaremos nossos intermediários.

   Aqui criarei um de autentificação e outro de verificação dos dados enviados para o servidor

<div align="center">
  <img src="https://i.imgur.com/MJIwCma.png" />
  <p>Organização das pastas da API</p>
</div>

### 11 - Criação dos dados filmes.json
  
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

### 12 - Chamando o arquivo de rotas no index.js

      const rotas = require('./routes');
  
      app.use(rotas);

## Leitura de Arquivos

  Para a utilização dos dados, precisaremos ler o arquivo filmes.json.

  Com isso, no arquivo do controlador filmes, vou criar uma função assincrona.
  
  A função assincrona para leitura que utilizaremos para nossa primeira rota será leituraArquivo

  - Chamada o pacote fs/promises, que já vem no node.js para leitura de arquivos

  - Criação da função leituraArquivo, uma função assincrona porque é necessário esperar a promessa da função readFile do pacote fs.
    
  - Como teremos a chamada da função assincrona readFile, utilizamos o try catch para evitar erros e se houver algun, mostrar qual erro foi dado.

  - Chamar a função assincrona readFile com await, devido a ser uma função assincrona e ter que esperar sua resposta para retornar o array filmes.

  - para o local do arquivo no readFile, aconselhavel a colocar todo o diretório, que aqui no meu é ./src/data/filmes.json

        const filmes = await fs.readFile('./src/data/filmes.json');

  - O retorno do array de filmes e para isso sua transformação em json com JSON.parse(nome da variavel)

<div align="center">
  <img src="https://i.imgur.com/BdF55QE.png" />
  <p>Função assincrona lerAquivo</p>
</div>

## Criação de Rotas e Requisições

### 1 - Criação da rota GET "/filmes" onde lista os filmes do arquivo filmes.json

   O verbo GET é usado para pegar dados do servidor, aqui pegaremos os filmes que estão salvo nos dados. Por isso utilizaremos GET

   - No controlador filmes.js criarei a função assincrona listarFilmes
     
   - Chamaremos a função leituraArquivos para criar o array de filmes e mostrar no body.

   - exportar a função listarFilmes

   - No arquivo routes.js chamar o controlador filmes.js como a constante filmes e criar a rota para listar os filmes

         rotas.get('/filmes', filmes.listarFilmes);

<div align="center">
  <img src="https://i.imgur.com/b3Kr5n4.png" />
  <p>Função listarFilmes</p>
</div>

### 2 - Rodando o Servidor

  Para rodar o servidor, eu gosto de ir no arquivo package.json e em scripts adicionar o seguinte script

      "start": "nodemon ./src/index.js"

 Assim para rodar o servidor utilizo:

    npm run start

<div align="center">
  <img src="https://i.imgur.com/UDC0QIs.png" />
  <p>Servidor rodando com Nodemon</p>
</div>
 
### 3 - Utilização do Insomnia para as rotas

   - Criei uma nova coleção apenas para esse projeto, chamei de API - Filmes
     
   - Criei uma requisição GET

   - Usando a url http://localhost:3000/filmes

<div align="center">
  <img src="https://i.imgur.com/nxbiiUv.png" />
  <p>Requisição no Insomnia</p>
</div>

## Criação da rota POST "/filmes" - Cadastrar filme

### 1 - Criando um intermediário para conferir autentificação

  Para esse projeto criarei um sistema de autentificação, onde precisa de um usuario e senha passado por query params para fazer o cadastro.

  Na função faço uma verificação se passou o usuário e senha como query params, caso não, aparece erro status 400 com a mensagem que são obrigatórios.
  
  Outra verificação é se o usuário é admin e a senha é admin@123, caso não, aparece erro status(403) onde o usuário ou a senha estão incorretos ou não tem autorização.

  Depois chamei a função no arquivo routes.js para ser utilizada como intermediário.

    const conferirAutentificacao = require('./middleware/autentificacao');

### 2 - Criando um intermediário para verificação dos campos para o cadastro

  Para verificar se todos os campos para o cadastro do filme foi enviada, criei uma função chamada verificarCamposCadastro.

  Com essa função ele apenas confere se falta algum campo, caso falte um ou mais campos, uma resposta de erro status (400) onde todos os campos são obrigatórios.

  Chamar a função no arquivo routes.js para ser utilizada.
  
    const { verificarCamposCadastro } = require('./middleware/verificacao');

### 3 - Criação da função assincrona escreverArquivo

   - Essa função é criada no controlador filmes.js

   - Ela recebe como parametro o array de filmes que será salvo no arquivo

   - Nela coloquei uma função sort para colocar de forma crescente o array de filmes baseado no id antes de escrever no arquivo.

   - Usando o pacote fs/promises, que vem no node.js, usando a função assincrona writeFile,

   - Assim como no readFile, coloquei o diretório do arquivo todo

         await fs.writeFile('./src/data/filmes.json', JSON.stringify(filmes));
     
   - E como pode ver, para salvar no arquivo ele precisa passar para string, com isso utilizei o JSON.stringify(nome da variavel) para passar para string ao escrever no arquivo

   **_:warning:OBS: Lembre que ao escrever o arquivo ele escreve por cima do que já tinha o arquivo. Logo qualquer alteração no arquivo será salva._**

<div align="center">
  <img src="https://i.imgur.com/alQwyeE.png" />
  <p>Função assincrona escreverArquivo</p>
</div>

### 4 - Criação da função assincrona cadastrarFilmes

   - A função é assincrona devido a utilização de leitura e escrita em arquivos.
     
   - Primeiro é salvar os campos enviados na requisição pelo body, fazendo uma destruturação das variáveis, a verificação já foi feita pelo intermediário.

   - Agora eu verifico se o filme a ser cadastrado já possui no banco de dados, com isso não será cadastrado novamente.

   - Em um objeto filme, crio com todos os campos e adiciono o id, que pega o id do último elemento e adicionar mais 1.
     
       **_:arrow_right:OBS: por isso que coloquei a função sort ao escrever o arquivo sempre em ordem crescente._**
     
   - No final adiciono o objeto filme no array filmes e salvo esse novo array no arquivo.

   - A resposta possui o status(204) que retorna tudo foi feito com sucesso.

   - Com o try catch, caso tenha algum erro é retornado o status (500) erro no servidor, além da mensagem de erro com qual erro foi dado.
     
<div align="center">
  <img src="https://i.imgur.com/7iIyKhJ.png" />
  <p>Função assincrona cadastrarFilmes</p>
</div>

 **Filme que será cadastrado**
 
      {
         "titulo": "O Jogo da Imitação",
         "ano": "2014",
         "genero": [
             "Biografia",
             "Drama",
             "Suspense"
         ],
         "duracao": "1h54",
         "diretor": [
             "Morten Tyldum"
         ],
         "roteiro": [
             "Graham Moore",
             "Andrew Hodges"
         ],
         "elenco": [
             "Benedict Cumberbatch",
             "Keira Knightley",
             "Matthew Goode"
         ],
         "imagem": "http://www.impawards.com/2014/posters/imitation_game_xlg.jpg",
         "trailer": "https://www.imdb.com/video/vi3398414105/?ref_=ext_shr_lnk",
         "sinopse": "Durante a segunda guerra mundial, um inglês gênio da matemática tenta decifrar o código alemão Enigma com a ajuda de seus colegas."
     }

### 5 - Requisição no Insomnia

   #### 5.1 - Erro da falta de usuario e senha

   <div align="center">
     <img src="https://i.imgur.com/zb8gZ5s.png" />
     <p>Erro no Insomnia pela falta de usuario e senha</p>
   </div>

   #### 5.2 - Erro de usuário ou senha inválida ou incorreto.

   <div align="center">
     <img src="https://i.imgur.com/vBWff9g.png" />
     <p>Erro no Insomnia por usuário certo e senha incorreta</p>
   </div>

   #### 5.3 - Erro pela falta de algum campo no body

   <div align="center">
     <img src="https://i.imgur.com/nbk14TG.png" />
     <p>Erro pela falta do campo ano no body</p>
   </div>

   #### 5.4 - Cadastro do filme feito com sucesso

   <div align="center">
     <img src="https://i.imgur.com/dHPOlkb.png" />
     <p>Status(204) Cadastro feito, sem retorno no body</p>
   </div>

#### 5.5 - Filme já na lista dos filmes

   <div align="center">
     <img src="https://i.imgur.com/uY3ZfGR.png" />
     <p>Listagem dos filmes com novo filme adicionado</p>
   </div>

##  Criação de uma rota GET para obter apenas um filme

   Criar a rota GET "./filmes/:idOuTitulo", onde pesquisaremos pelo Id ou Titulo do filme

   ### 1 - 
   
