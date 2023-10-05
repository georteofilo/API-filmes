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

- Criação do arquivo package.json para aplicação

  ```
  npm init -y
  ```
  
- Criação do arquivo .gitignore para não incluir o node_modules no repositório

- Instalação do pacote do Express (4.18.2)

  ```
  npm install express
  ```
  
- Instalação do pacote do Nodemon (3.0.1) para desenvolvimento por isso o -D

  ```
  npm install -D nodemon
  ```

- Criação da pasta src e criação do arquivo index.js
<div align="center">
  <img src="https://i.imgur.com/fadnnzS.png" />
</div>

- Configurando o index.js

     - Chamada do pacote express
 
     - Utilização de dados tipo json
 
     - Utilizar a porta 3000 para o servidor

 <div align="center">
  <img src="https://i.imgur.com/yYzBIKH.png" />
</div>

- Criação e primeira configuração do arquivo routes.js (rotas)
 
     - Dentro da pasta src crie o arquivo routes.js
 
     - Import o pacote express que sera usado para as rotas
 
     - exportacao de rotas

 <div align="center">
  <img src="https://i.imgur.com/d0MXaML.png" />
</div>

- Criação da pasta data, onde guardaremos nosso arquivo json de filmes

- Criação da pasta controller, onde colocaremos nossos controladores.

     Os controladores são os arquivos onde estarão as funções para controlar nossa aplicação.

     Aqui utilizaremos um controlador que é filmes.js

- Criação da pasta middleware, onde colocaremos nossos intermediários.

    Aqui criarei um de autentificação e outro de verificação dos dados enviados para o servidor


