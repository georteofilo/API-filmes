const express = require('express');
const rotas = express();
const filmes = require('./controller/filmes');
const conferirAutentificacao = require('./middleware/autentificacao');

rotas.get("/filmes", filmes.listarFilmes);
rotas.post('/filmes', conferirAutentificacao)

module.exports = rotas;